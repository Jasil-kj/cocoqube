import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'www.blossomvalley.in' },
      { protocol: 'https', hostname: 'blossomvalley.in' },
      { protocol: 'https', hostname: 'cocoqube-global.febi044.chatgpt.site' },
    ],
  },
};

export default nextConfig;
