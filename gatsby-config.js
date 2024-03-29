/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `by Valen Radovich`,
    description: `Descubre todo sobre Mar del Plata, la ciudad costera más grande de Argentina. Desde playas hasta cultura y gastronomía, explora todo lo que ofrece este destino turístico de renombre mundial en nuestro sitio web`,
    author: `@valenradovich`,
    siteUrl: `https://github.com/valenradovich/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mardelplata-info`,
        short_name: `mdp-info`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
