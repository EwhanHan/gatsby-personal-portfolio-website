module.exports = {
  siteMetadata: {
    title: `ewhanhan`,
    description: "Ewhan Han's personal portfolio website!",
    author: 'Ewhan Han',
    siteUrl: `https://ewhanhan.com`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-cname`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ewhan Han Personal Website`,
        short_name: `Ewhan Han`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/favicon.ico`,
      },
    },
  ],
};
