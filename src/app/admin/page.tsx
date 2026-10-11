"use client";

import PieChart from "@/src/components/graph/PieChart";
import DashboardCards from "./Dashboard/DashboardCards";
import DashboardCharts from "./Dashboard/DashboardCharts";
import RecentOrders from "./Dashboard/RecentOrders";

export default function DashboardPage() {
  return (
    <div className=" px-4 lg:px-10 pt-5 pb-4 lg:pb-10 space-y-4 lg:bg-white rounded-lg shadow ">
      {/* HEADER */}
      <div className="pb-2">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 pt-2 text-sm">
          Overview of Starp World performance
        </p>
      </div>

      {/* TOP CARDS */}
      <DashboardCards />

      {/* CHARTS */}
      {/* <DashboardCharts /> */}
      {/* TABLE */}
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="min-w-0 lg:col-span-2">
          <RecentOrders />
        </div>

        <div className="min-w-0 ">
          <PieChart />
        </div>
      </div>
    </div>
  );
}