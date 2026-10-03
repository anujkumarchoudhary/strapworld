import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*", // Port 8000 Express Server ko route bhejega
      },
    ];
  },
};

export default nextConfig;