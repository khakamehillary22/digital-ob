/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- enables static export
  reactStrictMode: true,
  distDir: "out", // <-- output folder for static files
  trailingSlash: true, // optional, ensures URLs end with '/'
};

export default nextConfig;
