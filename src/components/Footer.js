import { Box, Grid } from "@material-ui/core"
import React from "react"
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <Grid container className="footer" justify="center">
      <Grid item>
        <Box marginY={2}>
          <img src={logo} alt="logo" className="logo" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
