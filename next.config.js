/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
