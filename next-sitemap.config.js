/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.abideinthevineph.org',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
