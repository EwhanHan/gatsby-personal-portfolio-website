module.exports = {
  siteMetadata: {
    title: `ewhanhan`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500'],
            },
          ],
        },
      },
    },
  ],
};
