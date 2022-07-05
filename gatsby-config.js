module.exports = {
  siteMetadata: {
    title: `interprotocol`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: "gatsby-plugin-netlify-cms",
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
    },
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
