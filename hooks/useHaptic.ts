/**
 * Haptic Feedback System for Pixelverse
 *
 * Multi-platform approach:
 *   Android  → navigator.vibrate() with custom patterns
 *   iOS      → Web Audio API micro-clicks (since vibrate is unsupported)
 *   macOS    → Force Touch visual feedback + Web Audio micro-clicks
 *   Other    → Graceful no-op
 */

export type HapticType =
    | 'light'
    | 'medium'
    | 'heavy'
    | 'navigation'
    | 'card'
    | 'toggle'
    | 'success'
    | 'confetti'
    | 'immersive'
    | 'portrait';

// ── Android vibration patterns ──────────────────────────────────────
const patterns: Record<HapticType, number | number[]> = {
    light: 5,
    medium: 15,
    heavy: 25,
    navigation: [5, 10, 5],
    card: 8,
    toggle: [10, 50, 10],
    success: [10, 30, 10, 30, 10],
    confetti: [5, 30, 12, 25, 20, 20, 30, 15, 8, 40, 15, 30, 25],
    immersive: [8, 20, 15, 15, 25, 10, 35],
    portrait: [6, 40, 12],
};

// ── Platform detection ──────────────────────────────────────────────
const isApple = typeof navigator !== 'undefined' &&
    /Mac|iPhone|iPad|iPod/.test(navigator.platform ?? navigator.userAgent ?? '');
const isIOS = typeof navigator !== 'undefined' &&
    /iPhone|iPad|iPod/.test(navigator.platform ?? navigator.userAgent ?? '');
const hasVibrate = typeof navigator !== 'undefined' && 'vibrate' in navigator;

// ── Web Audio API haptic click engine (iOS + macOS) ─────────────────
// Creates ultra-short oscillator bursts that simulate haptic taps
// through the device speakers. Modeled after Apple HIG haptic types.
let audioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext | null {
    if (!isApple) return null;
    if (audioCtx) return audioCtx;
    try {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        return audioCtx;
    } catch {
        return null;
    }
}

// Resume audio context on first user interaction (required by Safari)
function ensureAudioResumed(): void {
    const ctx = getAudioCtx();
    if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => { });
    }
}

interface AudioHapticConfig {
    frequency: number;   // Hz — lower = thuddy, higher = clicky
    duration: number;    // seconds
    volume: number;      // 0-1
    type: OscillatorType;
}

// Apple HIG-inspired audio haptic configs
const audioHaptics: Record<HapticType, AudioHapticConfig | AudioHapticConfig[]> = {
    light: { frequency: 4000, duration: 0.006, volume: 0.03, type: 'sine' },
    medium: { frequency: 2500, duration: 0.01, volume: 0.04, type: 'sine' },
    heavy: { frequency: 1200, duration: 0.015, volume: 0.06, type: 'triangle' },
    navigation: { frequency: 3200, duration: 0.008, volume: 0.03, type: 'sine' },
    card: { frequency: 3500, duration: 0.008, volume: 0.03, type: 'sine' },
    toggle: { frequency: 2800, duration: 0.01, volume: 0.04, type: 'sine' },
    success: [
        { frequency: 3000, duration: 0.008, volume: 0.03, type: 'sine' },
        { frequency: 4000, duration: 0.008, volume: 0.04, type: 'sine' },
    ],
    confetti: [
        { frequency: 2000, duration: 0.006, volume: 0.03, type: 'sine' },
        { frequency: 3000, duration: 0.008, volume: 0.04, type: 'sine' },
        { frequency: 4200, duration: 0.01, volume: 0.05, type: 'triangle' },
    ],
    immersive: { frequency: 1500, duration: 0.015, volume: 0.05, type: 'triangle' },
    portrait: [
        { frequency: 800, duration: 0.018, volume: 0.06, type: 'triangle' },
        { frequency: 2800, duration: 0.012, volume: 0.06, type: 'sine' },
        { frequency: 3800, duration: 0.008, volume: 0.07, type: 'sine' },
    ],
};

function playAudioHaptic(type: HapticType): void {
    const ctx = getAudioCtx();
    if (!ctx) return;

    const config = audioHaptics[type] ?? audioHaptics.light;
    const configs = Array.isArray(config) ? config : [config];

    configs.forEach((cfg, i) => {
        const startTime = ctx.currentTime + i * 0.06; // 60ms gap between bursts

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = cfg.type;
        osc.frequency.setValueAtTime(cfg.frequency, startTime);

        // Sharp attack, quick decay envelope
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(cfg.volume, startTime + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + cfg.duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + cfg.duration + 0.01);
    });
}

// ── Main trigger function ───────────────────────────────────────────
let lastHapticTime = 0;

export function triggerHaptic(type: HapticType = 'light'): void {
    const now = Date.now();
    if (now - lastHapticTime < 50) return; // throttle
    lastHapticTime = now;

    // Android: vibrate
    if (hasVibrate) {
        try {
            navigator.vibrate(patterns[type] ?? patterns.light);
        } catch {
            // Silently fail
        }
    }

    // Apple (iOS + macOS): audio micro-click
    if (isApple) {
        playAudioHaptic(type);
    }
}

// ── Global haptic listeners ─────────────────────────────────────────
export function initGlobalHaptics(): () => void {
    const cleanups: (() => void)[] = [];

    // Resume AudioContext on first touch/click (Safari requirement)
    const resumeOnce = () => {
        ensureAudioResumed();
        document.removeEventListener('touchstart', resumeOnce);
        document.removeEventListener('mousedown', resumeOnce);
    };
    document.addEventListener('touchstart', resumeOnce, { passive: true });
    document.addEventListener('mousedown', resumeOnce);
    cleanups.push(() => {
        document.removeEventListener('touchstart', resumeOnce);
        document.removeEventListener('mousedown', resumeOnce);
    });

    const INTERACTIVE = 'a, button, [role="button"], .card, [data-target], .cursor-target';

    // 1. Touch start on interactive elements → light tap
    const onTouchStart = (e: TouchEvent) => {
        const target = e.target as HTMLElement | null;
        if (target?.closest(INTERACTIVE)) {
            triggerHaptic('light');
        }
    };
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    cleanups.push(() => document.removeEventListener('touchstart', onTouchStart));

    // 2. Section transition haptics via IntersectionObserver
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
                    triggerHaptic('navigation');
                }
            });
        },
        { threshold: 0.4 }
    );

    const observeTimer = setTimeout(() => {
        document.querySelectorAll('section, header, footer').forEach((el) => {
            sectionObserver.observe(el);
        });
    }, 500);
    cleanups.push(() => {
        clearTimeout(observeTimer);
        sectionObserver.disconnect();
    });

    // 3. Swipe gesture detection
    let touchStartY = 0;
    let touchStartX = 0;

    const onGestureStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
    };

    const onGestureMove = (e: TouchEvent) => {
        const deltaY = touchStartY - e.touches[0].clientY;
        const deltaX = touchStartX - e.touches[0].clientX;

        if (Math.abs(deltaY) > 60 || Math.abs(deltaX) > 60) {
            triggerHaptic('navigation');
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        }
    };

    document.addEventListener('touchstart', onGestureStart, { passive: true });
    document.addEventListener('touchmove', onGestureMove, { passive: true });
    cleanups.push(() => {
        document.removeEventListener('touchstart', onGestureStart);
        document.removeEventListener('touchmove', onGestureMove);
    });

    // 4. iOS — Touch-optimized visual spring feedback
    if (isIOS) {
        if (!document.getElementById('haptic-ios-styles')) {
            const style = document.createElement('style');
            style.id = 'haptic-ios-styles';
            style.textContent = `
                @keyframes iosTap {
                    0%   { transform: scale(1); }
                    40%  { transform: scale(0.96); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }

        const onIOSTouchStart = (e: TouchEvent) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            target.style.animation = 'none';
            void target.offsetHeight;
            target.style.animation = 'iosTap 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards';
        };
        document.addEventListener('touchstart', onIOSTouchStart, { passive: true });
        cleanups.push(() => document.removeEventListener('touchstart', onIOSTouchStart));
    }

    // 5. macOS — Force Touch visual haptics
    const isMac = isApple && !isIOS;

    if (isMac) {
        if (!document.getElementById('haptic-mac-styles')) {
            const style = document.createElement('style');
            style.id = 'haptic-mac-styles';
            style.textContent = `
                @keyframes hapticPulse {
                    0%   { transform: scale(1); }
                    15%  { transform: scale(0.97); }
                    40%  { transform: scale(1.01); }
                    100% { transform: scale(1); }
                }
                @keyframes hapticForceSlam {
                    0%   { transform: scale(1); }
                    15%  { transform: scale(0.94); }
                    40%  { transform: scale(1.02); }
                    70%  { transform: scale(0.99); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }

        // Normal click → spring-back pulse
        const onMouseDown = (e: MouseEvent) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            target.style.animation = 'none';
            void target.offsetHeight;
            target.style.animation = 'hapticPulse 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards';
        };
        document.addEventListener('mousedown', onMouseDown);
        cleanups.push(() => document.removeEventListener('mousedown', onMouseDown));

        // Prevent default force-click
        const onForceWillBegin = (e: Event) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE);
            if (target) e.preventDefault();
        };
        document.addEventListener('webkitmouseforcewillbegin', onForceWillBegin);
        cleanups.push(() =>
            document.removeEventListener('webkitmouseforcewillbegin', onForceWillBegin)
        );

        // Force click → deep slam
        const onForceDown = (e: Event) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            target.style.animation = 'none';
            void target.offsetHeight;
            target.style.animation = 'hapticForceSlam 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards';
            triggerHaptic('heavy');
        };
        document.addEventListener('webkitmouseforcedown', onForceDown);
        cleanups.push(() =>
            document.removeEventListener('webkitmouseforcedown', onForceDown)
        );

        // Force pressure → proportional squeeze
        const onForceChanged = (e: any) => {
            const force: number = e.webkitForce ?? 0;
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            const normalizedForce = Math.min(force / 3, 1);
            const scale = 1 - normalizedForce * 0.05;
            target.style.animation = 'none';
            target.style.transform = `scale(${scale})`;
        };
        document.addEventListener('webkitmouseforcechanged', onForceChanged);
        cleanups.push(() =>
            document.removeEventListener('webkitmouseforcechanged', onForceChanged)
        );

        // Mouse up → bounce back
        const onMouseUp = (e: MouseEvent) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            target.style.transform = 'scale(1)';
            target.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            setTimeout(() => { target.style.transition = ''; }, 200);
        };
        document.addEventListener('mouseup', onMouseUp);
        cleanups.push(() => document.removeEventListener('mouseup', onMouseUp));
    }

    return () => cleanups.forEach((fn) => fn());
}
