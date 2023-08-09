/** @type {import('next').NextConfig} */


const nextConfig = {
   experimental: {
      appDir: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'http',
            hostname: '1.1.1.1:8080',
         },
      ],
   },
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: ["@svgr/webpack"]
      })
      return config;
   },
   reactStrictMode: true,
   swcMinify: true,
   compiler: {
      removeConsole: process.env.NODE_ENV !== "development",
   },
};

const withPWA = require("next-pwa")({
   dest: "public",
   disable: process.env.NODE_ENV === "development",
   register: true,
   skipWaiting: true,
});

module.exports = withPWA(nextConfig);