/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://qr.alfo.online',
  generateRobotsTxt: true,
  exclude: ['/404'],
}
