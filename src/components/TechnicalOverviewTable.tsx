interface TechnicalOverviewItem {
    productCode: string;
    width: number | string;
    thickness: number | string;
    length: number | string;
    weight: number | string;
    averageBreakLoad: number | string;
    remarks: string;
}

interface TechnicalOverviewTableProps {
    data: TechnicalOverviewItem[];
}

const formatNumber = (
    value: number | string | null | undefined,
    decimals = 2
) => {
    const numberValue = Number(value);

    if (!Number.isFinite(numberValue)) {
        return "-";
    }

    return numberValue.toFixed(decimals);
};

export default function TechnicalOverviewTable({
    data,
}: TechnicalOverviewTableProps) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[1000px] border-collapse">
                <thead>
                    <tr className="bg-[#063F3D] text-left text-sm uppercase tracking-wide text-white">
                        <th className="whitespace-nowrap px-5 py-6">
                            Product Code
                        </th>

                        <th className="whitespace-nowrap px-5 py-6">
                            Width
                            <span className="ml-1 text-white/60">
                                (mm) ±0.05
                            </span>
                        </th>

                        <th className="whitespace-nowrap px-5 py-6">
                            Thickness
                            <span className="ml-1 text-white/60">
                                (mm) ±0.03
                            </span>
                        </th>

                        <th className="whitespace-nowrap px-5 py-6">
                            Length
                            <span className="ml-1 text-white/60">
                                (M./Roll) ±5%
                            </span>
                        </th>

                        <th className="whitespace-nowrap px-5 py-6">
                            Weight
                            <span className="ml-1 text-white/60">
                                (kg/Roll) ±0.01
                            </span>
                        </th>

                        <th className="whitespace-nowrap px-5 py-6">
                            Average Break Load
                            <span className="ml-1 text-white/60">
                                (kg)
                            </span>
                        </th>

                        <th className="whitespace-nowrap px-5 py-6">
                            Remarks
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map((item, index) => (
                        <tr
                            key={item.productCode}
                            className={`border-t border-gray-200 text-sm transition-colors hover:bg-[#39B972]/5 ${
                                index % 2 === 0
                                    ? "bg-white"
                                    : "bg-gray-50/70"
                            }`}
                        >
                            <td className="whitespace-nowrap px-5 py-2 font-semibold text-[#0B1E2D]">
                                {item.productCode}
                            </td>

                            <td className="whitespace-nowrap px-5 py-2 text-gray-600">
                                {formatNumber(item.width)}
                            </td>

                            <td className="whitespace-nowrap px-5 py-2 text-gray-600">
                                {formatNumber(item.thickness)}
                            </td>

                            <td className="whitespace-nowrap px-5 py-2 text-gray-600">
                                {formatNumber(item.length)}
                            </td>

                            <td className="whitespace-nowrap px-5 py-2 text-gray-600">
                                {formatNumber(item.weight)}
                            </td>

                            <td className="whitespace-nowrap px-5 py-2 font-medium text-[#0B1E2D]">
                                {formatNumber(item.averageBreakLoad)}
                            </td>

                            <td className="whitespace-nowrap px-5 py-2">
                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                        item.remarks === "Standard"
                                            ? "bg-[#39B972]/10 text-[#2E9B4F]"
                                            : "bg-gray-100 text-gray-600"
                                    }`}
                                >
                                    {item.remarks}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}