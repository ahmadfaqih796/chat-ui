/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_API,
    BASE_IMAGE_URL: process.env.NEXT_PUBLIC_BASE_IMAGE_URL,
    API_KEY: process.env.API_KEY,
    DOMAIN_URI_PROFIX: process.env.DOMAIN_URI_PROFIX,
    ANDROID: process.env.ANDROID,
    IOS: process.env.IOS,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/absen/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
