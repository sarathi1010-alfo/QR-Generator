/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://qrbuild.app',
  generateRobotsTxt: true,
  exclude: ['/404'],
}
