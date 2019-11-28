module.exports = {
  siteMetadata: {
    title: `ASoC`,
    author: `amfoss`,
    language: `en`,
    siteUrl: `https://asoc.amfoss.in`,
    social: {
      instagram: `amfoss.in`,
      linkedin: `amfoss`,
      twitter: `amfoss_in`,
      github: `amfoss`
    },
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
        ignore: [`**/\.*`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
              withWebp: {
                quality: 80
              },
              wrapperStyle: fluidResult =>
                `flex:${Math.round(fluidResult.aspectRatio, 2)};`
            }
          },
          `gatsby-remark-embed-video`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-a11y-emoji`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              noInlineHighlight: true
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand:300,400,500,700`],
        display: `swap`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amrita Season of Code`,
        short_name: `ASoC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/asoc.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-smoothscroll`
  ]
};
