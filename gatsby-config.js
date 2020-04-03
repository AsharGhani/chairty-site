"use strict";

module.exports = {
  siteMetadata: {
    title: "Ibad - Ur - Rahman",
    description: "Serving humanity by giving back to life",
    keywords: "charity, humanity, clean, water, poverty, alleviation, education, food, health care",
    siteUrl: "https://asharghani.github.io/chairty-site/",
    author: {
      name: "Ashar Ghani",
      url: "https://github.com/asharghani/",
      email: "ashar.ghani@outlook.com",
    },
  },
  pathPrefix: "/chairty-site",
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
        siteUrl: "https://asharghani.github.io/chairty-site/",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sass",
  ],
};
