const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    API_PROD_URL: "https://abide-in-the-vine.herokuapp.com",
    API_DEV_URL: "http://localhost:1337",
    SITE_URL: "https://www.abideinthevineph.org",
  },
};

module.exports = withContentlayer(nextConfig);
