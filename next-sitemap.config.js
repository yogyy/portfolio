/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yogyy.vercel.app',
  changefreq: 'daily',
  generateRobotsTxt: true,
  exclude: ['/spotify'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
