// const { loadEnvConfig } = require("@next/env");

// loadEnvConfig(".");

// const backendBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: `${backendBaseUrl}/:path*`,
  //       },
  //     ];
  //   },
};

export default nextConfig;
