/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./app/lib/static-image-loader.js",
    deviceSizes: [384, 768, 1280, 1920],
    imageSizes: [],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
