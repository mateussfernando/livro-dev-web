import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  images: {
    domains: ["m.media-amazon.com"], // Permite carregar imagens desse domínio
  },
  // Outras configurações do Next.js podem ser adicionadas aqui
});

export default nextConfig;
