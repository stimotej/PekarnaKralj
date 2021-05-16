import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"

const kolaci = ({ data }) => {
  const {
    allStrapiKolaci: { nodes },
  } = data

  const { title, description, backgroundImage, images } = nodes[0]

  return (
    <Layout>
      <Gallery
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        images={images}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiKolaci {
      nodes {
        title
        description
        backgroundImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          image {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default kolaci
