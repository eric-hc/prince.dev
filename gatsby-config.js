const gatsbyRemarkImageConfig = {
  resolve: `gatsby-remark-images`,
  options: {
    maxWidth: 750,
    linkImagesToOriginal: true,
    shopwCaptions: ['title'],
  }
}

module.exports = {
  siteMetadata: {
    title: 'Prince Wilson - Developer',
    twitter: 'https://twitter.com/maxcell',
    url: 'https://prince.dev',
    description: 'An organically growing notebook of thoughts and learnings!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          { ...gatsbyRemarkImageConfig }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: `>`,
              showLineNumbersGlobal: false,
              noInlineHighlight: false,
            },
          },
          { ...gatsbyRemarkImageConfig }
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-82244410-2',
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
