/**
 * Haptic Feedback System for Pixelverse
 * Uses navigator.vibrate() — works on Android Chrome/Edge.
 * Gracefully no-ops on unsupported browsers (iOS Safari, desktop).
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
    | 'immersive';

const patterns: Record<HapticType, number | number[]> = {
    light: 5,
    medium: 15,
    heavy: 25,
    navigation: [5, 10, 5],
    card: 8,
    toggle: [10, 50, 10],
    success: [10, 30, 10, 30, 10],
    // Samsung Health-style celebration: 3 escalating intensity levels
    // light tap → medium buzz → strong burst, with rhythmic pauses
    confetti: [5, 30, 12, 25, 20, 20, 30, 15, 8, 40, 15, 30, 25],
    // Immersive card reveal: deep rising pulse with a sustained finish
    immersive: [8, 20, 15, 15, 25, 10, 35],
};

/**
 * Trigger a haptic vibration pattern.
 * Safe to call anywhere — no-ops if vibration API is unavailable.
 * Throttled to ~50ms to prevent console spam from rapid events.
 */
let lastHapticTime = 0;
export function triggerHaptic(type: HapticType = 'light'): void {
    const now = Date.now();
    if (now - lastHapticTime < 50) return; // throttle
    lastHapticTime = now;

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
            navigator.vibrate(patterns[type] ?? patterns.light);
        } catch {
            // Silently fail on browsers that throw
        }
    }
}

/**
 * Attach global haptic listeners to the document.
 * Call once on app mount, returns a cleanup function.
 *
 * Covers:
 * - Touch start on interactive elements (light tap)
 * - Section intersection (navigation pulse on enter)
 * - Swipe gesture detection (navigation haptic)
 */
export function initGlobalHaptics(): () => void {
    const cleanups: (() => void)[] = [];

    // 1. Touch start on interactive elements → light tap
    const onTouchStart = (e: TouchEvent) => {
        const target = e.target as HTMLElement | null;
        if (target?.closest('a, button, [role="button"], .card, [data-target]')) {
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

    // Observe after a short delay so sections are in the DOM
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
            // Reset so we don't fire repeatedly during the same gesture
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

    // 4. Mac Taptic Engine — Enhanced visual haptics for MacBooks
    //    Safari cannot programmatically trigger the Taptic Engine, BUT the
    //    trackpad physically clicks on mousedown. We amplify the experience
    //    with dramatic visual feedback that makes every click FEEL impactful.
    const isMac = typeof navigator !== 'undefined' &&
        /Mac/.test(navigator.platform ?? '');

    if (isMac) {
        // Inject spring-back keyframes once
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

        const INTERACTIVE = 'a, button, [role="button"], .card, [data-target], .cursor-target';

        // Every normal click → spring-back pulse animation
        const onMouseDown = (e: MouseEvent) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            target.style.animation = 'none';
            // Force reflow to restart animation
            void target.offsetHeight;
            target.style.animation = 'hapticPulse 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards';
        };
        document.addEventListener('mousedown', onMouseDown);
        cleanups.push(() => document.removeEventListener('mousedown', onMouseDown));

        // Prevent default force-click behavior (dictionary lookup, etc.)
        const onForceWillBegin = (e: Event) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE);
            if (target) e.preventDefault();
        };
        document.addEventListener('webkitmouseforcewillbegin', onForceWillBegin);
        cleanups.push(() =>
            document.removeEventListener('webkitmouseforcewillbegin', onForceWillBegin)
        );

        // Force click → deep slam animation (much stronger than normal click)
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

        // Force pressure → live proportional squeeze (deep range: 1 → 0.85)
        const onForceChanged = (e: any) => {
            const force: number = e.webkitForce ?? 0;
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            const normalizedForce = Math.min(force / 3, 1);
            const scale = 1 - normalizedForce * 0.05; // 1 → 0.95
            target.style.animation = 'none';
            target.style.transform = `scale(${scale})`;
        };
        document.addEventListener('webkitmouseforcechanged', onForceChanged);
        cleanups.push(() =>
            document.removeEventListener('webkitmouseforcechanged', onForceChanged)
        );

        // Reset transform on mouse up so elements bounce back
        const onMouseUp = (e: MouseEvent) => {
            const target = (e.target as HTMLElement)?.closest(INTERACTIVE) as HTMLElement | null;
            if (!target) return;
            target.style.transform = 'scale(1)';
            target.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            setTimeout(() => {
                target.style.transition = '';
            }, 200);
        };
        document.addEventListener('mouseup', onMouseUp);
        cleanups.push(() => document.removeEventListener('mouseup', onMouseUp));
    }

    // Return unified cleanup
    return () => cleanups.forEach((fn) => fn());
}
