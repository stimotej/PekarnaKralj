import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsArrowRight } from "react-icons/bs"
import { Box, Grid, Typography } from "@material-ui/core"

const Card = ({ title, description, slug, image, reverse }) => {
  const gatsbyImage = getImage(image)

  return (
    <Grid
      container
      direction={reverse ? "row" : "row-reverse"}
      alignItems="center"
      className="card"
    >
      <Box clone order={2}>
        <Grid item xs={12} md={6} className="card-content card-text">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" className="card-desc">
            {description}
          </Typography>
          <Link to={`/${slug}`} className="card-link">
            <Typography variant="button">Idi na {title}</Typography>
            <BsArrowRight size={22} className="card-link-icon" />
          </Link>
        </Grid>
      </Box>
      <Box clone order={1}>
        <Grid item xs={12} md={6} className="card-media">
          <GatsbyImage image={gatsbyImage} className="card-image" />
        </Grid>
      </Box>
    </Grid>
  )
}

export default Card
