"use client";

import { CSSProperties } from "react";

interface UseBackgroundProps {
    bg?: string;
    imageBaseUrl?: string;
    fallback?: string;
}

export const useBackground = ({
    bg,
    imageBaseUrl = "",
    fallback = "#ffffff",
}: UseBackgroundProps): CSSProperties => {
    if (!bg) {
        return {
            background: fallback,
        };
    }

    const isImage =
        /\.(jpg|jpeg|png|webp|svg|gif)(\?.*)?$/i.test(bg);

    if (isImage) {
        return {
            backgroundImage: `url('${imageBaseUrl}${bg}')`,
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
    }

    return {
        background: bg,
    };
};