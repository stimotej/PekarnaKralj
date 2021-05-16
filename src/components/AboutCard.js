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
      <Grid direction="row" xs={12} lg={6}>
        <GatsbyImage image={gatsbyImage} className="card-image" />
      </Grid>
      <Grid direction="row" justify="flex-end" container>
        <Grid direction="col" xs={12} lg={8}>
          <Box component="p" marginTop={4} marginBottom={3}>
            <Typography variant="body1">{description}</Typography>
          </Box>
          <Link to="/o-nama" className="card-link">
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
