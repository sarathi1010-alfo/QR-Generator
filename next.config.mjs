/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

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
