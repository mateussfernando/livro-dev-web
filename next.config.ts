import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['m.media-amazon.com'], // Permite carregar imagens desse domínio
  },
};

export default nextConfig;
