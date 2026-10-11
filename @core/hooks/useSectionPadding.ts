import { useMemo } from "react";

const DEFAULT_PADDING: [string, string] = ["4rem", "4rem"];

export const useSectionPadding = (
    padding?: string[] | null
): [string, string] => {
    return useMemo(() => {
        const [top = DEFAULT_PADDING[0], bottom = DEFAULT_PADDING[1]] =
            padding ?? [];

        return [top, bottom];
    }, [padding]);
};