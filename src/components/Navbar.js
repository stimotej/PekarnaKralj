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
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar className="navbar">
          <Link
            to="/torte"
            className="nav-link nav-hide"
            aria-label="Idi na torte"
          >
            Torte
          </Link>
          <Link
            to="/kolaci"
            className="nav-link nav-hide"
            aria-label="Idi na kolače"
          >
            Kolači
          </Link>
          <Link
            to="/pekarski-proizvodi"
            className="nav-link nav-hide"
            aria-label="Idi na pekarske proizvode"
          >
            Pekarski proizvodi
          </Link>
          <Link to="/" aria-label="Idi na početnu stranicu">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Link
            to="/o-nama"
            className="nav-link nav-hide"
            aria-label="Idi na stranicu o nama"
          >
            O nama
          </Link>
          <Link
            to="/kontakt"
            className="nav-link nav-hide"
            aria-label="Idi na kontakt stranicu"
          >
            Kontakt
          </Link>
          <IconButton
            aria-label="menu"
            className="menu-btn"
            aria-label="Otvori izbornik za navigaciju"
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
        <Grid
          container
          className="navbar-menu"
          direction="column"
          justify="center"
          alignContent="center"
        >
          <Link to="/torte" className="nav-link" aria-label="Idi na torte">
            Torte
          </Link>
          <Link to="/kolaci" className="nav-link" aria-label="Idi na kolače">
            Kolači
          </Link>
          <Link
            to="/pekarski-proizvodi"
            className="nav-link"
            aria-label="Idi na pekarske proizvode"
          >
            Pekarski proizvodi
          </Link>
          <Link
            to="/o-nama"
            className="nav-link"
            aria-label="Idi na stranicu o nama"
          >
            O nama
          </Link>
          <Link
            to="/kontakt"
            className="nav-link"
            aria-label="Idi na kontakt stranicu"
          >
            Kontakt
          </Link>
        </Grid>
      )}
    </>
  )
}

export default NavbarComponent
