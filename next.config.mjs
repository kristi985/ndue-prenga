/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ndue-prenga',
  assetPrefix: '/ndue-prenga',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
