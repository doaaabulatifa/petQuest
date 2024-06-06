import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "icons8.com",
        port: "",
        pathname:"**"
      },
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
