import { Grid } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <Grid container className="text-center">
        <h1>Stranica nije pronađena</h1>
        <Link to="/">Vrati se na početnu</Link>
      </Grid>
    </Layout>
  )
}

export default Error
