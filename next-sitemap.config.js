/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://infinityanimations.com/', // change to your domain
    generateRobotsTxt: true, // (optional)
    sitemapSize: 5000,
    exclude: ['/server-sitemap.xml'], // example exclude
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://https://infinityanimations.com/sitemap.xml',
      ],
    },
  }
  