/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://infinityanimations.com/', // change to your domain
    generateRobotsTxt: true, // (optional)
    sitemapSize: 5000,
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://infinityanimations.com/sitemap.xml',
      ],
    },
  }
  