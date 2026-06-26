import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/virtual-classes-website",
  assetPrefix: "/virtual-classes-website/",
};

export default nextConfig;
