// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the part we're adding:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;