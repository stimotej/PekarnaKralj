import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Grid, Typography } from "@material-ui/core"

const Hero = () => {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        className="hero-image"
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt="Slika kolači"
        src={"../assets/background.jpg"}
        formats={["auto", "webp", "avif"]}
      />

      <Grid
        container
        alignItems="center"
        justify="center"
        style={{
          gridArea: "1/1",
          zIndex: "100",
        }}
      >
        <Grid item className="title">
          <Typography variant="h1" component="h1">
            Pekarna Kralj
          </Typography>
          <Typography component="h3">Kraljevski dobri kolači</Typography>
          <Link
            to="/kontakt"
            className="contact-btn"
            aria-label="Idi na kontakt"
          >
            Kontakt
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
