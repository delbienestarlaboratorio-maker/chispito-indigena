import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "https://chispito-indigena.pages.dev",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

