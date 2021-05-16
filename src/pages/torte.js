import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"

const categoryList = [
  { name: "Sve", value: "" },
  { name: "Krsne torte", value: "krsne_torte" },
  { name: "Vjenčane torte", value: "vjencane_torte" },
  { name: "Torte za prvu pričest", value: "torte_za_prvu_pricest" },
]

const torte = ({ data }) => {
  const {
    allStrapiTorte: { nodes },
  } = data

  const { title, description, backgroundImage, images } = nodes[0]

  return (
    <Layout>
      <Gallery
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        images={images}
        categoryList={categoryList}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiTorte {
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
          category
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

export default torte
