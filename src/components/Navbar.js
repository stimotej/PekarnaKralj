import React, { useEffect } from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.svg"
import { AppBar, Box, Grid, IconButton, Toolbar } from "@material-ui/core"
import { FiMenu, FiX } from "react-icons/fi"

const NavbarComponent = () => {
  const [showNavbar, setShowNavbar] = React.useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(() => {
    document.body.style.overflow = showNavbar ? "hidden" : "auto"
  })

  return (
    <>
      <AppBar position="absolute" color="transparent" elevation="0">
        <Toolbar className="navbar">
          <Link to="/torte" className="nav-link nav-hide">
            Torte
          </Link>
          <Link to="/kolaci" className="nav-link nav-hide">
            Kolači
          </Link>
          <Link to="/pekarski-proizvodi" className="nav-link nav-hide">
            Pekarski proizvodi
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Link to="/o-nama" className="nav-link nav-hide">
            O nama
          </Link>
          <Link to="/kontakt" className="nav-link nav-hide">
            Kontakt
          </Link>
          <IconButton
            aria-label="menu"
            className="menu-btn"
            onClick={handleShowNavbar}
          >
            {showNavbar ? (
              <FiX size={28} color="white" />
            ) : (
              <FiMenu size={28} color="white" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      {showNavbar && (
        <Box component="div" overflow="hidden">
          <Grid
            container
            className="navbar-menu"
            direction="column"
            justify="center"
            alignContent="center"
          >
            <Link to="/torte" className="nav-link">
              Torte
            </Link>
            <Link to="/kolaci" className="nav-link">
              Kolači
            </Link>
            <Link to="/pekarski-proizvodi" className="nav-link">
              Pekarski proizvodi
            </Link>
            <Link to="/o-nama" className="nav-link">
              O nama
            </Link>
            <Link to="/kontakt" className="nav-link">
              Kontakt
            </Link>
          </Grid>
        </Box>
      )}
    </>
  )
}

export default NavbarComponent
