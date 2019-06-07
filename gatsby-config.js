module.exports = {
  siteMetadata: {
    title: `Antediluvian`,
    description: `Antediluvian is a weird fiction magazine promoting horror, fantasy, sci fi, and more.`,
    author: `@garethpbk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `catacombs.gareth.cool`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          `**/*/*/media`,
          `**/*/*/pages`,
          `**/*/*/posts`,
          `**/adl_menu`,
          `**/*/*/adl_config`,
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `WPGraphQL`,
    //     fieldName: `wpgraphql`,
    //     url: `https://catacombs.gareth.cool/graphql`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `antediluvian`,
        short_name: `antediluvian`,
        start_url: `/`,
        background_color: `#829171`,
        theme_color: `#a7b09d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
