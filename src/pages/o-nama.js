import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/Layout"
import { Box, Grid, Typography } from "@material-ui/core"
import ImageModal from "../components/ImageModal"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, text, image, images } = nodes[0]

  const gatsbyImage = getImage(image)

  const [imageModal, setImageModal] = React.useState(null)

  const handleImageModalClose = () => setImageModal(null)
  const handleImageModal = img => setImageModal(getImage(img.localFile))

  return (
    <Layout>
      <GatsbyImage
        image={gatsbyImage}
        className="about-image"
        imgStyle={{
          objectFit: "cover",
          objectPosition: "50% 30%",
        }}
      />
      <Grid container className="about-content padding" fluid>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
          <Box paddingY={4}>
            <Typography variant="body1">
              <ReactMarkdown children={text} />
            </Typography>
          </Box>
        </Grid>

        <Grid item container spacing={3}>
          {images.map((img, index) => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <div
                  onClick={() => handleImageModal(img)}
                  onKeyDown={() => handleImageModal(img)}
                  role="button"
                  tabIndex="0"
                >
                  <GatsbyImage
                    image={getImage(img.localFile)}
                    className="about-images"
                    style={{
                      gridArea: "1/1",
                    }}
                    layout="fullWidth"
                  />
                </div>
              </Grid>
            )
          })}
          <ImageModal
            imageState={imageModal}
            handleClose={handleImageModalClose}
          />
        </Grid>

        <Grid item container direction="column">
          <Grid item>
            <Box marginTop={8} marginBottom={4}>
              <Typography variant="h5">Kontakt informacije</Typography>
            </Box>
          </Grid>
          <Grid item container direction="row">
            <Grid item sm={12} md={4}>
              <Box marginY={1}>
                <Typography variant="h6">Telefon</Typography>
              </Box>
              <Box marginY={1}>01/2061 146 (ured)</Box>
              <Box marginY={1}>098/242 672 (Anica Kralj)</Box>
              <Box marginY={1}>098/324 276 (Karlo Kralj - direktor)</Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box marginY={1}>
                <Typography variant="h6">Email</Typography>
              </Box>
              <Box marginY={1}>info@pekarnakralj.hr</Box>
              <Box marginY={1}>karlo.kralj@zg.t-com.hr</Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box marginY={1}>
                <Typography variant="h6">Adresa</Typography>
              </Box>
              <Box marginY={1}>
                Trg Ante Starčevića 5, 10380 Sveti Ivan Zelina
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box marginBottom={8}>
        <iframe
          title="Location Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.579529053575!2d16.240180314913708!3d45.95968337910992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766735aef4147f1%3A0xf4ab4c77ba63ee7e!2sPekarna%20KRALJ!5e0!3m2!1shr!2shr!4v1619448075705!5m2!1shr!2shr"
          className="loacation-map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        text
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default About
