import { Box, Grid, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="404" />
      <Layout>
        <StaticImage
          src="../assets/pekarna-kralj-404.jpg"
          alt="404 background image"
          className="about-image"
          imgStyle={{
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
        <Grid container justify="center" className="about-content padding">
          <Grid item direction="column" className="text-center">
            <Typography variant="h4">Stranica nije pronađena</Typography>
            <Box marginTop={6}>
              <Link
                to="/"
                className="card-link"
                aria-label="Idi na početnu stranicu"
                style={{ justifyContent: "center" }}
              >
                <Typography variant="button">Vrati se na početnu</Typography>
                <BsArrowRight size={22} className="card-link-icon" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default Error
