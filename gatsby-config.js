module.exports = {
  siteMetadata: {
    title: `Alphanumeric`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`
  ],
}