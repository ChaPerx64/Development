module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/ChaPerx64/Development/main/**",
      },
    ],
  },
  output: "export",
  distDir: "docs",
};
