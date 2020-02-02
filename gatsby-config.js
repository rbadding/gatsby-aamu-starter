require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = {
  accessToken: process.env.AAMU_API_KEY,
  host: process.env.AAMU_HOST
}

const { accessToken } = config

if (!accessToken) {
  throw new Error(
    'Aamu.app access token needs to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: `aamu`,
        typeName: `Aamu`,
        url: `https://ile.aamu.app/api/v1/graphql/`,
        headers: {
          "x-api-key": process.env.AAMU_API_KEY
        },
      }
    }
  ],
}
