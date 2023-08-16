/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kaylamoz-portfolio-media.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
