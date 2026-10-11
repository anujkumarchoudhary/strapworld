"use client";

import { useRef, useState, useEffect } from "react";
import { LiaSignalSolid } from "react-icons/lia";

/* ================= TYPES ================= */

type MonthKey =
    | "Jul 2025" | "Aug 2025" | "Sep 2025" | "Oct 2025" | "Nov 2025"
    | "Dec 2025" | "Jan 2026" | "Feb 2026" | "Mar 2026" | "Apr 2026" | "May 2026"
    | "Jun 2026" | "Jul 2026";

type MonthType = {
    name: MonthKey;
    x: number;
    bars: number[];
};
interface GraphProps {
    selectedMonth?: MonthType;
    setSelectedMonth?: React.Dispatch<React.SetStateAction<MonthType>>;
}

export const googleRanking: MonthType[] = [
    { name: "Jul 2025", x: 75, bars: [0, 14, 13, 2, 1] },
    { name: "Aug 2025", x: 145, bars: [4, 13, 14, 2, 1] },
    { name: "Sep 2025", x: 215, bars: [0, 14, 12, 2, 2] },
    { name: "Oct 2025", x: 285, bars: [1, 14, 11, 3, 2] },
    { name: "Nov 2025", x: 355, bars: [2, 11, 11, 4, 4] },
    { name: "Dec 2025", x: 425, bars: [3, 7, 10, 7, 6] },
    { name: "Jan 2026", x: 495, bars: [4, 7, 11, 6, 6] },
    { name: "Feb 2026", x: 565, bars: [0, 3, 12, 8, 7] },
    { name: "Mar 2026", x: 635, bars: [0, 4, 10, 7, 9] },
    { name: "Apr 2026", x: 705, bars: [0, 1, 9, 8, 12] },
    { name: "May 2026", x: 775, bars: [1, 2, 8, 7, 13] },
    { name: "Jun 2026", x: 845, bars: [3, 1, 2, 9, 18] },
    { name: "Jul 2026", x: 915, bars: [2, 0, 1, 9, 20] },
];

const Graph_4_1 = ({
    selectedMonth,
    setSelectedMonth,
}: GraphProps) => {
    const currentMonths = googleRanking;
    const MAX_BAR_HEIGHT = 240;
    const FIXED_TOP_Y = 130;

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [activeLegends, setActiveLegends] = useState<boolean[]>([true, true, true, true, true]);

    const toggleLegend = (index: number) => {
        const newLegends = [...activeLegends];
        newLegends[index] = !newLegends[index];
        setActiveLegends(newLegends);
    };

    const legendsData = [
        { label: "1-3", color: "#6B8E23", index: 4 },
        { label: "4-10", color: "#A9C95F", index: 3 },
        { label: "11-20", color: "#E8D58B", index: 2 },
        { label: "21-50", color: "#F2B566", index: 1 },
        { label: "51+", color: "#D76060", index: 0 },
    ];

    const colors = ["#D76060", "#F2B566", "#E8D58B", "#A9C95F", "#6B8E23"];

    const isAnyLegendActive = activeLegends.some((isActive) => isActive);

    const maxActiveValue = Math.max(
        ...currentMonths.map((month) =>
            month.bars.reduce((sum, val, i) => sum + (activeLegends[i] ? val : 0), 0)
        )
    );

    const yAxisMax = Math.max(3, Math.ceil(maxActiveValue / 3) * 3);
    const SCALE = MAX_BAR_HEIGHT / yAxisMax;

    const getTotal = (bars: number[]) =>
        bars.reduce((sum, value, i) => sum + (activeLegends[i] ? value : 0), 0);

    const targetTotalCount = selectedMonth
        ? getTotal(selectedMonth.bars)
        : getTotal(currentMonths[currentMonths.length - 1].bars);

    const [animatedTotalCount, setAnimatedTotalCount] = useState(targetTotalCount);

    useEffect(() => {
        const duration = 500;
        const fps = 60;
        const totalFrames = (duration / 1000) * fps;

        const start = animatedTotalCount;
        const end = targetTotalCount;

        if (start === end) return;

        let frame = 0;

        const interval = setInterval(() => {
            frame++;

            setAnimatedTotalCount(
                Math.round(start + ((end - start) * frame) / totalFrames)
            );

            if (frame >= totalFrames) {
                clearInterval(interval);
                setAnimatedTotalCount(end);
            }
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [targetTotalCount]);

    const getTooltipPosition = (x: number, topY: number) => {
        let posX = x + 42;
        let posY = topY;
        if (x < 120) posX = x + 42;
        if (x > 780) posX = x - 132;
        if (posY < 10) posY = 10;
        return { x: posX, y: posY };
    };

    const renderTooltip = (month: MonthKey, x: number, topY: number) => {
        const data = currentMonths.find((m) => m.name === month)?.bars;
        if (!data) return null;
        const pos = getTooltipPosition(x, topY);

        return (
            <foreignObject key={month} x={pos.x} y={pos.y} width="130" height="220" className="animate-fadeIn pointer-events-none">
                <div className="bg-black text-white text-[18px] rounded-[5px] p-3 border border-white/10 shadow-lg">
                    <div className="font-semibold mb-5">{month}</div>
                    {legendsData.map((item, i) => {
                        if (!activeLegends[item.index]) return null;

                        return (
                            <div key={i} className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-[15px]">{item.label}</span>
                                </div>
                                <span className="font-medium text-[15px]">{data[item.index]}</span>
                            </div>
                        );
                    })}
                </div>
            </foreignObject>
        );
    };

    return (
        <div className="w-full border border-[#0000000D]">
            <svg viewBox="0 0 995 430" width="100%" height="100%" style={{ overflow: "visible" }}>
                <style>{`
          .bar {
            transition: height 0.3s ease, y 0.3s ease, fill 0.3s ease;
          }
        `}</style>

                <foreignObject x="25" y="15" width="250" height="35">
                    <div className="flex items-center gap-2 text-[20px] font-medium text-black">
                        <LiaSignalSolid color="#2985CC" width={16} height={12} />
                        <span className="text-black text-[20px]">Google Rankings</span>
                    </div>
                </foreignObject>

                {/* Total Count */}
                <text fontSize={22} x="970" y="38" textAnchor="end" fill="#000000" fontWeight={600}>
                    {animatedTotalCount}
                </text>

                <foreignObject x="60" y="65" width="910" height="35">
                    <div className="flex items-center justify-center gap-6 w-full h-full">
                        {legendsData.map((leg) => {
                            const isActive = activeLegends[leg.index];
                            return (
                                <button
                                    key={leg.label}
                                    type="button"
                                    onClick={() => toggleLegend(leg.index)}
                                    className="flex items-center gap-2 cursor-pointer group outline-none select-none"
                                >
                                    <span
                                        className="w-3.5 h-3.5 rounded-full transition-all duration-300"
                                        style={{ backgroundColor: isActive ? leg.color : "#d1d5db" }}
                                    />
                                    <span
                                        className={`text-[16px] transition-colors duration-300 ${isActive ? "text-[#666] font-semibold group-hover:text-black" : "text-[#aaa] font-normal"
                                            }`}
                                    >
                                        {leg.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </foreignObject>

                {isAnyLegendActive && (
                    <>
                        {/* Grid Lines */}
                        <line x1="60" y1="370" x2="970" y2="370" stroke="#0000001A" />
                        <line x1="60" y1="290" x2="970" y2="290" stroke="#0000001A" />
                        <line x1="60" y1="210" x2="970" y2="210" stroke="#0000001A" />
                        <line x1="60" y1="130" x2="970" y2="130" stroke="#0000001A" />

                        {/* DYNAMIC Y LABELS */}
                        <g fontSize="14" fontWeight="500" fill="#00000066">
                            <text x="30" y="374">0</text>
                            <text x="30" y="294">{(yAxisMax / 3).toFixed(0)}</text>
                            <text x="30" y="214">{((yAxisMax * 2) / 3).toFixed(0)}</text>
                            <text x="30" y="134">{yAxisMax}</text>
                        </g>

                        {/* BARS */}
                        {currentMonths.map((month) => {
                            return (
                                <g
                                    key={month.name}
                                    className="cursor-pointer"
                                    onMouseEnter={() => {
                                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                        if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
                                        enterTimeoutRef.current = setTimeout(() => {
                                            setSelectedMonth?.(month);
                                        }, 22);
                                    }}
                                    onMouseLeave={() => {
                                        if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
                                    }}
                                >
                                    {(() => {
                                        let baseY = 370;
                                        return month.bars.map((value, i) => {
                                            if (!activeLegends[i]) return null;

                                            const segmentHeight = value * SCALE;
                                            baseY -= segmentHeight;

                                            return (
                                                <rect
                                                    key={i}
                                                    className="bar"
                                                    x={month.x}
                                                    y={baseY}
                                                    width="40"
                                                    height={segmentHeight}
                                                    fill={colors[i]}
                                                />
                                            );
                                        });
                                    })()}

                                    <text x={month.x} y="398" fill="#949494" fontSize="12">
                                        {month.name}
                                    </text>
                                </g>
                            );
                        })}

                        {/* TOOLTIP */}
                        {selectedMonth && renderTooltip(selectedMonth.name, selectedMonth.x, FIXED_TOP_Y)}
                    </>
                )}
            </svg>
        </div>
    );
};

export default Graph_4_1;
