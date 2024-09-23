import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../header/NavBar";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h5"
            color="support"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", fontWeight: "bold", flexGrow: 1 }}
          >
            LOGO
          </Typography>
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
