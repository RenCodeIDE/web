/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "identity.stanford.edu",
      },
      {
        protocol: "https",
        hostname: "illinois.edu",
      },
      {
        protocol: "https",
        hostname: "www.unc.edu",
      },
      {
        protocol: "https",
        hostname: "duke.edu",
      },
      {
        protocol: "https",
        hostname: "brand.berkeley.edu",
      },
      {
        protocol: "https",
        hostname: "www.gatech.edu",
      },
    ],
  },
};

export default nextConfig;
