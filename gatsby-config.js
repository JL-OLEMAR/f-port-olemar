module.exports = {
  siteMetadata: {
    title: 'José Olemar',
    description: 'Desarrollo de un blog sobre programación con stripe and gatsby by José Olemar.',
    author: '@joseluisolemar'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images` // eslint-disable-line
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://strapi-portafolio.herokuapp.com',
        queryLimit: 1000, // Default to 100
        contentTypes: ['post']
      }
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
    //   }
    // },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/icons/
        }
      }
    },
    'gatsby-plugin-gatsby-cloud'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
