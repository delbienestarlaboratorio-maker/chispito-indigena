import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Requerido para @opennextjs/cloudflare
  output: "standalone",
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

