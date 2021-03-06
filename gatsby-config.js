"use strict";

module.exports = {
  siteMetadata: {
    title: "Ibaad - ur - Rahman",
    description: "Serving humanity by giving back to life",
    keywords: "charity, humanity, clean, water, poverty, alleviation, education, food, health care",
    siteUrl: "https://ibaad-ur-rahman.org/",
    author: {
      name: "Ashar Ghani",
      url: "https://github.com/asharghani/",
      email: "ashar.ghani@outlook.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://ibaad-ur-rahman.org/",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "7cdmx3u8smde",
        accessToken: "0vUyk5SenAu7JRSkJnAlVg6aW1Rfq4dIYz2BkajvemE",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-167029667-1",
      },
    },
  ],
};
