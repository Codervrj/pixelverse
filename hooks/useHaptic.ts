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
 */
export function triggerHaptic(type: HapticType = 'light'): void {
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

    // Return unified cleanup
    return () => cleanups.forEach((fn) => fn());
}
