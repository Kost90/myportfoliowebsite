/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio Website`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `data`,
      path: `${__dirname}/data`,
    }
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Roboto`,
          file: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`,
        },
      ],
    },
  }]
};