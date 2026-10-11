"use client";

import { useEffect, useState } from "react";
import { MotionValue, useMotionValueEvent, useScroll } from "framer-motion";

interface UseStickyProcessProps {
    target: React.RefObject<HTMLElement | null>;
    itemCount: number;
}

interface UseStickyProcessReturn {
    activeIndex: number;
    progress: MotionValue<number>;
}

export const useStickyProcess = ({
    target,
    itemCount,
}: UseStickyProcessProps): UseStickyProcessReturn => {
    const { scrollYProgress } = useScroll({
        target,
        offset: ["start start", "end end"],
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!itemCount) return;

        const index = Math.min(
            itemCount - 1,
            Math.floor(latest * itemCount)
        );

        setActiveIndex(index);
    });

    return {
        activeIndex,
        progress: scrollYProgress,
    };
};