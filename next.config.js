/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    API_PROD_URL: "https://abide-in-the-vine.herokuapp.com",
    API_DEV_URL: "http://localhost:1337",
  },
};

module.exports = nextConfig;
