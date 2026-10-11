import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface UsePaginationProps {
  totalItems: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  isPaused?: boolean;
}

export const usePagination = ({
  totalItems,
  autoplay = false,
  autoplayDelay = 3000,
  isPaused = false,
}: UsePaginationProps) => {
  // 0 = cloned last slide
  // 1 = first real slide
  // 2 = second real slide
  // totalItems = last real slide
  // totalItems + 1 = cloned first slide
  const [currentIndex, setCurrentIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  /**
   * Active pagination dot
   */
  const activeDotIndex = useMemo(() => {
    if (!totalItems) return 0;

    return (
      ((currentIndex - 1) % totalItems + totalItems) %
      totalItems
    );
  }, [currentIndex, totalItems]);

  /**
   * Go to specific real slide
   */
  const goToSlide = useCallback((index: number) => {
    if (!totalItems) return;

    setEnableTransition(true);
    setCurrentIndex(index + 1);
  }, [totalItems]);

  /**
   * Next slide
   */
  const nextSlide = useCallback(() => {
    if (!totalItems) return;

    setEnableTransition(true);

    setCurrentIndex((prev) => prev + 1);
  }, [totalItems]);

  /**
   * Previous slide
   */
  const prevSlide = useCallback(() => {
    if (!totalItems) return;

    setEnableTransition(true);

    setCurrentIndex((prev) => prev - 1);
  }, [totalItems]);

  /**
   * Handle infinite slider clones
   */
  const handleTransitionEnd = useCallback(() => {
    if (!totalItems) return;

    // Reached cloned first slide
    if (currentIndex === totalItems + 1) {
      setEnableTransition(false);

      requestAnimationFrame(() => {
        setCurrentIndex(1);
      });

      return;
    }

    // Reached cloned last slide
    if (currentIndex === 0) {
      setEnableTransition(false);

      requestAnimationFrame(() => {
        setCurrentIndex(totalItems);
      });
    }
  }, [currentIndex, totalItems]);

  /**
   * Re-enable transition after clone reset
   */
  useEffect(() => {
    if (enableTransition) return;

    const timer = setTimeout(() => {
      setEnableTransition(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [enableTransition]);

  /**
   * AUTOPLAY
   *
   * Important:
   * Don't depend on enableTransition here.
   * Otherwise autoplay can stop after clone reset.
   */
  useEffect(() => {
    if (!autoplay || isPaused || totalItems <= 1) {
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, autoplayDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [
    autoplay,
    autoplayDelay,
    isPaused,
    totalItems,
    currentIndex,
  ]);

  /**
   * Keep index valid if data changes
   */
  useEffect(() => {
    if (!totalItems) return;

    setCurrentIndex((prev) => {
      if (prev < 1) return 1;
      if (prev > totalItems) return 1;

      return prev;
    });
  }, [totalItems]);

  return {
    currentIndex,
    activeDotIndex,
    enableTransition,
    goToSlide,
    nextSlide,
    prevSlide,
    handleTransitionEnd,
  };
};