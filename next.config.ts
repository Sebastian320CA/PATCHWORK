import type { NextConfig } from "next";

// Static export: the whole app runs in the browser, so hosting is free and
// judges can use it until the end of the judging period.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
