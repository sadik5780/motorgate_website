/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  distDir: isProd ? 'dist' : '.next',
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
