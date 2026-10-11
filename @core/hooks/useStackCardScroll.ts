"use client";

import {
    RefObject,
    useEffect,
    useState,
} from "react";

interface UseStackCardScrollOptions {
    sectionRef: RefObject<HTMLElement | null>;
    itemCount: number;
    enabled?: boolean;

    /*
     * Variant 03 / 04 / 05
     */
    variant?: "03" | "04" | "05";
}

interface UseStackCardScrollReturn {
    progress: number;
    rawProgress: number;

    /*
     * Variant 03
     */
    currentIndex: number;
    transitionStart: number;
    cardProgress: number;
    smoothProgress: number;

    /*
     * Variant 04
     */
    exitIndex: number;
    exitProgress: number;

    /*
     * Variant 05
     *
     * 3 visible cards.
     *
     * Example:
     * 5 cards = 2 transitions
     *
     * 0 → first position
     * 1 → second position
     * 2 → third position
     */
    horizontalProgress: number;

    totalTransitions: number;
}

const clamp = (
    value: number,
    min = 0,
    max = 1
) => {
    return Math.min(
        Math.max(value, min),
        max
    );
};

const easeInOut = (
    value: number
) => {
    return (
        value *
        value *
        (3 - 2 * value)
    );
};

export const useStackCardScroll = ({
    sectionRef,
    itemCount,
    enabled = true,
    variant = "03",
}: UseStackCardScrollOptions): UseStackCardScrollReturn => {

    const [progress, setProgress] =
        useState(0);

    useEffect(() => {
        if (
            !enabled ||
            itemCount <= 0
        ) {
            setProgress(0);
            return;
        }

        let frameId:
            number | null = null;

        const updateProgress = () => {
            const section =
                sectionRef.current;

            if (!section) {
                return;
            }

            const rect =
                section.getBoundingClientRect();

            const sectionTop =
                window.scrollY +
                rect.top;

            /*
             * =====================================================
             * TOTAL TRANSITIONS
             * =====================================================
             *
             * Variant 03
             *
             * 5 cards = 4 transitions
             *
             * Variant 04
             *
             * 5 cards = 5 exits
             *
             * Variant 05
             *
             * 5 cards with 3 visible =
             * 2 transitions
             *
             * 6 cards with 3 visible =
             * 3 transitions
             *
             * 7 cards with 3 visible =
             * 4 transitions
             */
            const totalTransitions =
                variant === "04"
                    ? Math.max(
                        itemCount,
                        1
                    )
                    : variant === "05"
                        ? Math.max(
                            itemCount - 3,
                            1
                        )
                        : Math.max(
                            itemCount - 1,
                            1
                        );

            /*
             * =====================================================
             * TOTAL SCROLL
             * =====================================================
             */
            const totalScroll =
                window.innerHeight *
                totalTransitions;

            /*
             * =====================================================
             * CURRENT SECTION SCROLL
             * =====================================================
             */
            const currentScroll =
                window.scrollY -
                sectionTop;

            /*
             * =====================================================
             * NORMALIZED PROGRESS
             * =====================================================
             */
            const nextProgress =
                clamp(
                    currentScroll /
                    totalScroll
                );

            setProgress(
                nextProgress
            );
        };

        const handleScroll = () => {
            if (
                frameId !== null
            ) {
                return;
            }

            frameId =
                requestAnimationFrame(
                    () => {
                        updateProgress();

                        frameId =
                            null;
                    }
                );
        };

        const handleResize = () => {
            updateProgress();
        };

        /*
         * Initial calculation
         */
        updateProgress();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleResize
            );

            if (
                frameId !== null
            ) {
                cancelAnimationFrame(
                    frameId
                );
            }
        };
    }, [
        sectionRef,
        itemCount,
        enabled,
        variant,
    ]);

    /*
     * =====================================================
     * TOTAL TRANSITIONS
     * =====================================================
     */
    const totalTransitions =
        variant === "04"
            ? Math.max(
                itemCount,
                1
            )
            : variant === "05"
                ? Math.max(
                    itemCount - 3,
                    1
                )
                : Math.max(
                    itemCount - 1,
                    1
                );

    /*
     * =====================================================
     * RAW PROGRESS
     * =====================================================
     *
     * Variant 03:
     * 5 cards = 0 → 4
     *
     * Variant 04:
     * 5 cards = 0 → 5
     *
     * Variant 05:
     * 5 cards = 0 → 2
     */
    const rawProgress =
        progress *
        totalTransitions;

    /*
     * =====================================================
     * VARIANT 03
     * =====================================================
     */
    const currentIndex =
        itemCount > 1
            ? Math.min(
                Math.ceil(
                    rawProgress
                ),
                itemCount - 1
            )
            : 0;

    /*
     * =====================================================
     * VARIANT 04
     * =====================================================
     */
    const exitIndex =
        itemCount > 1
            ? Math.min(
                Math.floor(
                    rawProgress
                ),
                itemCount - 1
            )
            : 0;

    /*
     * =====================================================
     * TRANSITION START
     * =====================================================
     */
    const transitionStart =
        Math.floor(
            rawProgress
        );

    /*
     * =====================================================
     * CARD PROGRESS
     *
     * Variant 03
     * =====================================================
     */
    const cardProgress =
        itemCount > 1
            ? rawProgress -
              transitionStart
            : 0;

    /*
     * =====================================================
     * VARIANT 04 EXIT PROGRESS
     * =====================================================
     */
    const exitProgress =
        variant === "04"
            ? progress >= 1
                ? 1
                : clamp(
                    rawProgress -
                    Math.floor(
                        rawProgress
                    )
                )
            : itemCount > 1
                ? rawProgress -
                  Math.floor(
                      rawProgress
                  )
                : 0;

    /*
     * =====================================================
     * VARIANT 03 SMOOTH PROGRESS
     * =====================================================
     */
    const smoothProgress =
        easeInOut(
            clamp(
                cardProgress
            )
        );

    /*
     * =====================================================
     * VARIANT 05
     * =====================================================
     *
     * Horizontal slider progress.
     *
     * 5 cards:
     *
     * 3 visible initially
     *
     * Scroll:
     *
     * 0 ──────────────── 1 ──────────────── 2
     *
     * [1][2][3]          [2][3][4]          [3][4][5]
     *
     * So horizontalProgress is:
     *
     * 0 → 2
     *
     * NOT:
     *
     * 0 → 5
     */
    const horizontalProgress =
        variant === "05"
            ? rawProgress
            : 0;

    return {
        /*
         * Common
         */
        progress,
        rawProgress,
        totalTransitions,

        /*
         * Variant 03
         */
        currentIndex,
        transitionStart,
        cardProgress,
        smoothProgress,

        /*
         * Variant 04
         */
        exitIndex,
        exitProgress,

        /*
         * Variant 05
         */
        horizontalProgress,
    };
};