import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core"
import SEO from "../components/Seo"

const kontakt = () => {
  return (
    <>
      <SEO title="Kontakt" />
      <Layout>
        <StaticImage
          src="../assets/pekarna-kralj-kontakt.jpg"
          alt="Contact background image"
          className="about-image"
          imgStyle={{
            objectFit: "cover",
            objectPosition: "60% 40%",
          }}
        />
        <Grid container className="about-content" fluid justify="center">
          <div className="contact-card">
            <Typography variant="h4">Kontakt</Typography>
            <Box marginY={4}>
              <form
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
                noValidate
                autoComplete="off"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <Grid item container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="ime"
                      id="standard-required"
                      label="Ime"
                      className="form-input"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="email"
                      id="standard-required"
                      label="Email"
                      type="email"
                      className="form-input"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      name="poruka"
                      id="standard-multiline-static"
                      label="Poruka"
                      multiline
                      rows={4}
                      className="form-input"
                    />
                  </Grid>
                </Grid>
                <Box marginTop={6}>
                  <Button
                    className="submit-btn"
                    variant="contained"
                    type="submit"
                  >
                    Pošalji
                  </Button>
                </Box>
              </form>
            </Box>
          </div>
        </Grid>
      </Layout>
    </>
  )
}

export default kontakt
