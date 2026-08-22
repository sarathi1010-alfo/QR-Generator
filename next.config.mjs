/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/qr-code-scanner',
        destination: '/scanner',
        permanent: true,
      },
      {
        source: '/generator/:path*',
        destination: '/qr-codes/:path*',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
