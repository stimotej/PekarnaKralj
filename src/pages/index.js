import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import AboutCard from "../components/AboutCard"
import Comments from "../components/Comments"
import SEO from "../components/Seo"

const Index = ({ data }) => {
  const {
    allStrapiCards: { nodes: cards },
  } = data
  return (
    <>
      <SEO title="Početna" />
      <Layout>
        <Hero />
        <Cards cards={cards} />
        <AboutCard />
        <Comments />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiCards {
      nodes {
        id
        title
        description
        slug
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
export default Index
