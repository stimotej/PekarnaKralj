module.exports = {
  siteMetadata: {
    title: `Pekarna Kralj`,
    description: `Kraljevski kolači i pekarski proizvodi pekarne Kralj`,
    titleTemplate: `%s | Pekarna Kralj`,
    url: `https://pekarnakralj.netlify.app`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "500"],
            },
            {
              family: "Great Vibes",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`cards`, `comments`],
        singleTypes: [`about`, `torte`, `kolaci`, `pekarski-proizvodi`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PekarnaKralj`,
        short_name: `PekarnaKralj`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f48221`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
}
