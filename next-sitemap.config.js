/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://qr.alfo.online',
  generateRobotsTxt: true,
  exclude: ['/404'],
}
