module.exports = {
    plugins: [
        // You can have multiple instances of this plugin
        // to read source nodes from different locations on your
        // filesystem.
        //
        // The following sets up the Jekyll pattern of having a
        // "pages" directory for Markdown files and a "data" directory
        // for `.json`, `.yaml`, `.csv`.
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.png',
            },
        },
        "gatsby-plugin-sass",
        'gatsby-plugin-postcss'
    ],
}
