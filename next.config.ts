import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/foto.png",
        search: "?v=2",
      },
    ],
  },
};

export default nextConfig;
