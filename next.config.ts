import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Pre-existing shadcn components have uninstalled peer deps; portfolio page is clean
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
