import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imágenes: usar unoptimized en CF Pages (no tiene Image Optimization en free tier)
  images: {
    unoptimized: true,
  },
  // Evitar errores de ESLint en build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

