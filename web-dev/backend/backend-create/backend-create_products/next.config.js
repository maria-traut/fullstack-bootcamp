/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.zooplus.de",
      },
      {
        protocol: "https",
        hostname: "bowenislandconservancy.org",
      },
      {
        protocol: "https",
        hostname: "tropical-fish-keeping.com",
      },
      {
        protocol: "https",
        hostname: "as1.ftcdn.net",
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
