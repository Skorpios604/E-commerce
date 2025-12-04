import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/E-commerce', // Repository name
  assetPrefix: '/E-commerce/', // Repository name
};

export default nextConfig;
