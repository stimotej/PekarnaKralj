import { Box, Grid } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <Grid container className="footer" justify="center">
      <Grid item>
        <Box marginY={2}>
          <Link to="/" aria-label="Idi na početnu stranicu">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
