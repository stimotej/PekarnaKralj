import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsArrowRight } from "react-icons/bs"
import { Box, Grid, Typography } from "@material-ui/core"

const query = graphql`
  {
    allStrapiAbout {
      nodes {
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const AboutCard = () => {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(query)
  const { description, image } = nodes[0]

  const gatsbyImage = getImage(image)

  return (
    <Box component="article" marginTop={5} className="padding">
      <Grid item xs={12} md={6}>
        <GatsbyImage
          image={gatsbyImage}
          alt={`Slika - O nama`}
          className="card-image"
          imgStyle={{ borderRadius: "1rem" }}
        />
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={8}>
          <Box marginTop={4} marginBottom={3}>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </Box>
          <Link
            to="/o-nama"
            className="card-link"
            aria-label="Idi na stranicu o nama"
          >
            <Typography variant="button">
              Više o povijesti obitelji kralj
            </Typography>
            <BsArrowRight size={22} className="card-link-icon" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutCard
