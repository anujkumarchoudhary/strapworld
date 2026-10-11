export interface StackCardAnimationOptions {
    index: number;
    totalCards: number;
    progress: number;
    currentIndex: number;
    smoothProgress: number;

    startOffset?: number;
    centerOffset?: number;

    rotation?: number;
}

export interface StackCardAnimationResult {
    translateY: number;
    rotation: number;
    zIndex: number;
}

export const getStackCardRotation = (
    index: number
) => {
    if (index === 0) {
        return 0;
    }

    return index % 2 === 0
        ? 2
        : -2;
};

/*
 * =========================================================
 * VARIANT 03
 * =========================================================
 *
 * Card animation:
 *
 * bottom → center
 *
 * Existing working animation.
 *
 * DO NOT CHANGE.
 * =========================================================
 */

export const getStackCardAnimation = ({
    index,
    totalCards,
    progress,
    currentIndex,
    smoothProgress,
    startOffset = 56,
    centerOffset = -15,
    rotation,
}: StackCardAnimationOptions): StackCardAnimationResult => {
    let translateY =
        startOffset;

    let zIndex = 10;

    const cardRotation =
        rotation ??
        getStackCardRotation(index);

    /*
     * ==========================================
     * FIRST CARD
     * ==========================================
     */
    if (index === 0) {
        translateY =
            centerOffset;

        zIndex = 80;
    }

    /*
     * ==========================================
     * PREVIOUS CARDS
     * ==========================================
     *
     * Cards that already reached center
     * remain at center.
     */
    if (
        index < currentIndex
    ) {
        translateY =
            centerOffset;

        zIndex =
            70 -
            (
                currentIndex -
                index
            );
    }

    /*
     * ==========================================
     * CURRENT / INCOMING CARD
     * ==========================================
     *
     * bottom → center
     */
    if (
        index === currentIndex
    ) {
        if (index === 0) {
            translateY =
                centerOffset;

            zIndex = 100;
        } else {
            translateY =
                startOffset +
                (
                    centerOffset -
                    startOffset
                ) *
                smoothProgress;

            zIndex = 100;
        }
    }

    /*
     * ==========================================
     * NEXT CARDS
     * ==========================================
     */
    if (
        index > currentIndex
    ) {
        translateY =
            startOffset;

        zIndex =
            40 -
            (
                index -
                currentIndex
            );
    }

    /*
     * ==========================================
     * EXACT INITIAL STATE
     * ==========================================
     */
    if (progress === 0) {
        if (index === 0) {
            translateY =
                centerOffset;

            zIndex = 100;
        } else {
            translateY =
                startOffset;

            zIndex =
                40 - index;
        }
    }

    /*
     * ==========================================
     * EXACT FINAL STATE
     * ==========================================
     *
     * Last card finishes in center.
     */
    if (
        progress === 1 &&
        index === totalCards - 1
    ) {
        translateY =
            centerOffset;

        zIndex = 100;
    }

    return {
        translateY,
        rotation: cardRotation,
        zIndex,
    };
};

/*
 * =========================================================
 * VARIANT 04
 * =========================================================
 *
 * Card animation:
 *
 * center → top → hidden
 *
 * Unlike Variant 03:
 *
 * - Cards do NOT rotate left/right alternately.
 * - Every card starts with the same left rotation.
 * - The active card rotates further left while
 *   moving from center → top.
 * - Previous cards remain hidden above the viewport.
 * - The LAST CARD stays at center.
 * =========================================================
 */

export interface StackCardExitAnimationOptions {
    index: number;
    totalCards: number;

    progress: number;

    /*
     * Index of the card currently leaving.
     */
    exitIndex: number;

    /*
     * Progress of the current
     * center → top transition.
     */
    exitProgress: number;

    centerOffset?: number;

    /*
     * Position above the viewport.
     */
    exitOffset?: number;

    /*
     * Starting rotation of cards.
     *
     * Negative value = rotate left.
     */
    rotation?: number;

    /*
     * Final rotation while the card
     * leaves toward the top.
     */
    exitRotation?: number;
}

export const getStackCardExitAnimation = ({
    index,
    totalCards,
    progress,
    exitIndex,
    exitProgress,
    centerOffset = -15,
    exitOffset = -115,

    /*
     * All Variant 04 cards start
     * with the same left rotation.
     */
    rotation = 7,

    /*
     * While exiting:
     *
     * 7deg → -37deg
     */
    exitRotation = -37,
}: StackCardExitAnimationOptions): StackCardAnimationResult => {
    let translateY =
        centerOffset;

    let cardRotation =
        rotation;

    let zIndex = 10;

    /*
     * ==========================================
     * CURRENT / EXITING CARD
     * ==========================================
     *
     * center → top
     *
     * At the same time:
     *
     * 7deg → -37deg
     */
    if (
        index === exitIndex
    ) {
        translateY =
            centerOffset +
            (
                exitOffset -
                centerOffset
            ) *
            exitProgress;

        cardRotation =
            rotation +
            (
                exitRotation -
                rotation
            ) *
            exitProgress;

        zIndex = 100;
    }

    /*
     * ==========================================
     * PREVIOUS CARDS
     * ==========================================
     *
     * Cards which have already moved
     * out of the viewport stay hidden.
     */
    if (
        index < exitIndex
    ) {
        translateY =
            exitOffset;

        cardRotation =
            exitRotation;

        zIndex =
            20 -
            (
                exitIndex -
                index
            );
    }

    /*
     * ==========================================
     * NEXT CARDS
     * ==========================================
     *
     * Future cards remain at center.
     *
     * Every card has the SAME rotation.
     */
    if (
        index > exitIndex
    ) {
        translateY =
            centerOffset;

        cardRotation =
            rotation;

        zIndex =
            50 -
            (
                index -
                exitIndex
            );
    }

    /*
     * ==========================================
     * EXACT INITIAL STATE
     * ==========================================
     *
     * All cards are stacked at center.
     *
     * Card 1 is on top.
     */
    if (
        progress === 0
    ) {
        translateY =
            centerOffset;

        cardRotation =
            rotation;

        zIndex =
            index === 0
                ? 100
                : 50 - index;
    }

    /*
     * ==========================================
     * IMPORTANT
     * ==========================================
     *
     * There is NO special last-card
     * override here.
     *
     * Therefore the last card follows
     * the exact same:
     *
     * center → top → hidden
     *
     * animation as every other card.
     */

    return {
        translateY,
        rotation: cardRotation,
        zIndex,
    };
};


/*
 * =========================================================
 * VARIANT 05
 * =========================================================
 *
 * Horizontal 3-card slider.
 *
 * Initial:
 *   [Card 1] [Card 2] [Card 3]
 *
 * Scroll DOWN:
 *   [Card 2] [Card 3] [Card 4]
 *
 * Scroll DOWN:
 *   [Card 3] [Card 4] [Card 5]
 *
 * Scroll UP:
 *   [Card 2] [Card 3] [Card 4]
 *
 * One scroll transition = one card movement.
 *
 * Cards enter from the RIGHT.
 * Cards leave toward the LEFT.
 *
 * =========================================================
 */

export interface StackCardHorizontalAnimationOptions {
    index: number;
    totalCards: number;
    progress: number;

    /*
     * Gap between cards.
     */
    cardGap?: number;
}

export interface StackCardHorizontalAnimationResult {
    translateX: string;
    translateY: number;
    rotation: number;
    zIndex: number;
}

export const getStackCardHorizontalAnimation = ({
    index,
    totalCards,
    progress,
    cardGap = 16,
}: StackCardHorizontalAnimationOptions): StackCardHorizontalAnimationResult => {

    /*
     * =====================================================
     * TOTAL HORIZONTAL TRANSITIONS
     * =====================================================
     *
     * 5 cards = 2 transitions
     * 6 cards = 3 transitions
     * 7 cards = 4 transitions
     *
     * [1][2][3]
     *     ↓
     * [2][3][4]
     *     ↓
     * [3][4][5]
     * =====================================================
     */
    const maxProgress =
        Math.max(
            totalCards - 3,
            0
        );

    /*
     * Keep progress inside the valid range.
     */
    const currentProgress =
        Math.min(
            Math.max(
                progress,
                0
            ),
            maxProgress
        );

    /*
     * =====================================================
     * CARD POSITION
     * =====================================================
     *
     * IMPORTANT:
     *
     * Do NOT use:
     *
     * calc(
     *     (index - progress) *
     *     (100% + 16px)
     * )
     *
     * CSS calc() does not reliably support this
     * multiplication syntax.
     *
     * Instead calculate the numeric multiplier
     * in JavaScript and then create:
     *
     * calc(50% + 20px)
     *
     * or:
     *
     * calc(-150% - 24px)
     *
     * This gives the browser a valid transform
     * that updates smoothly with scroll.
     * =====================================================
     */
    const cardOffset =
        index - currentProgress;

    const translateX =
        `calc(${cardOffset * 100}% + ${cardOffset * cardGap}px)`;

    /*
     * No vertical movement.
     */
    const translateY = 0;

    /*
     * No rotation.
     */
    const rotation = 0;

    /*
     * =====================================================
     * Z-INDEX
     * =====================================================
     */
    const baseIndex =
        Math.floor(
            currentProgress
        );

    const relativeIndex =
        index - baseIndex;

    let zIndex = 1;

    /*
     * Visible cards.
     *
     * First  = highest
     * Second = middle
     * Third  = lowest
     */
    if (
        relativeIndex >= 0 &&
        relativeIndex <= 2
    ) {
        zIndex =
            30 - relativeIndex;
    }

    /*
     * =====================================================
     * INCOMING CARD
     * =====================================================
     *
     * The next card enters from the right.
     */
    if (
        relativeIndex === 3 &&
        currentProgress % 1 > 0
    ) {
        zIndex = 100;
    }

    /*
     * =====================================================
     * CURRENT CARD LEAVING
     * =====================================================
     *
     * Keep the card currently leaving above
     * the cards behind it.
     */
    if (
        relativeIndex === 0 &&
        currentProgress % 1 > 0
    ) {
        zIndex = 90;
    }

    return {
        translateX,
        translateY,
        rotation,
        zIndex,
    };
};