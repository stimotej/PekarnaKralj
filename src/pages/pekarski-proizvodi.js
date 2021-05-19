import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import Seo from "../components/Seo"

const pekarskiProizvodi = ({ data }) => {
  const {
    allStrapiPekarskiProizvodi: { nodes },
  } = data

  const { title, description, backgroundImage, images } = nodes[0]

  return (
    <>
      <Seo title="Pekarski proizvodi" />
      <Layout>
        <Gallery
          title={title}
          description={description}
          backgroundImage={backgroundImage}
          images={images}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiPekarskiProizvodi {
      nodes {
        title
        description
        backgroundImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          id
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default pekarskiProizvodi
