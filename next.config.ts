import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // Apnar image-er domain name ekhane boshaben
      },
      // Jodi Unsplash ba onnno kono specific domain theke ase:
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Lentils + Pulses merged into one page
      { source: "/lentils", destination: "/lentils-pulses", permanent: true },
      { source: "/pulses", destination: "/lentils-pulses", permanent: true },
    ];
  },
};

export default nextConfig;
