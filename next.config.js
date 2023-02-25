const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = withNextra({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
