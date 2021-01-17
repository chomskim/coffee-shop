module.exports = {
  siteMetadata: {
    title: "The Coffee Blog",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "static/img",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pageData",
        path: `${__dirname}/src/pageData`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-relative-images", "gatsby-remark-images"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
