// next.config.mjs
// import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },

  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
     
    ],
    formats: ['image/webp', 'image/avif', ],
  },
};
console.log("TEST CONFIG LOADED");
module.exports = config;
