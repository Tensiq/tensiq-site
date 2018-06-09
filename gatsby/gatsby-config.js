const GraphQlJson = require('graphql-type-json');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-native-web',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerMode: 'static',
        openAnalyzer: false,
        production: true,
        generateStatsFile: true,
        statsFilename: '../stats.json',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-emoji-unicode',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          'gatsby-remark-smarttypo',
          {
            resolve: 'gatsby-remark-generic-extensions',
            options: {
              elements: {
                Icon: {
                  html: {
                    tagName: 'icon',
                    properties: {
                      name: '::content::',
                      color: '::argument::',
                    },
                  },
                },
                Youtube: {
                  html: {
                    tagName: 'c-youtube',
                    properties: {
                      title: '::content::',
                    },
                    children: [
                      {
                        type: 'element',
                        tagName: 'iframe',
                        properties: {
                          width: '100%',
                          height: '100%',
                          frameborder: '0',
                          src: 'https://www.youtube.com/embed/::argument::',
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                testtable: 'custom-block-testtable eins zwei drei',
              },
            },
          },
        ],
      },
    },
  ],
};
