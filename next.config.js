/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/upsc-final',
        destination: '/',
        permanent: false,
      },
      {
        source: '/upsc-final/:path*',
        destination: '/:path*',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
