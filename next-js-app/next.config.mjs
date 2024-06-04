/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [{
        source: '/api/fast-api-app/:path*',
        destination: 'http://localhost:8000/:path*',
      },];
    }
      return [];
  },
};
export default nextConfig;
