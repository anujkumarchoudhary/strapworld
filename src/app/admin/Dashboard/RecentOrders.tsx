"use client";

import { useCallback, useEffect, useState } from "react";
import DynamicTable from "@/src/components/table/DynamicTable";
import { BaseUrl } from "../../baseurl";

interface IEnquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  status?: string;
  createdAt?: string;
}

export default function RecentOrders() {
  const [data, setData] = useState<IEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEnquiries = useCallback(async () => {
    try {
      setLoading(true);
      setError("");


      if (!BaseUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured.");
      }

      const response = await fetch(`${BaseUrl.replace(/\/$/, "")}/enquiries`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch enquiries (${response.status}).`);
      }

      const result = await response.json();

      const enquiries: IEnquiry[] = Array.isArray(result)
        ? result
        : Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.enquiries)
            ? result.enquiries
            : [];

      setData(enquiries);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load enquiries.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchEnquiries();
  }, [fetchEnquiries]);

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Phone",
      render: (row: IEnquiry) => row.phone || "-",
    },
    {
      key: "status",
      label: "Status",
      render: (row: IEnquiry) => {
        const status = row.status || "New";

        return (
          <span
            className={`text-sm font-medium ${status.toLowerCase() === "resolved"
                ? "text-green-600"
                : status.toLowerCase() === "pending"
                  ? "text-yellow-600"
                  : "text-blue-600"
              }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      key: "createdAt",
      label: "Date",
      render: (row: IEnquiry) =>
        row.createdAt
          ? new Date(row.createdAt).toLocaleDateString("en-IN")
          : "-",
    },
  ];

  return (
    <div className="w-full min-w-0">
      {error && (
        <div
          role="alert"
          className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600"
        >
          <span>{error}</span>

          <button
            type="button"
            onClick={() => void fetchEnquiries()}
            className="font-medium underline"
          >
            Retry
          </button>
        </div>
      )}

      <DynamicTable
        columns={columns}
        data={data}
        loading={loading}
        emptyMessage="No enquiries found."
        pagination
        itemsPerPage={5}
        headingText="Recent Enquiries"
        searchPlaceholder="Search enquiries..."
        isAction={false}
      />
    </div>
  );
}