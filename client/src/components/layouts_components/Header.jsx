import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../header/NavBar";
import NavBarMobile from "../header/NavBarMobile";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ paddingTop: "10px", paddingBottom: "8px" }}
    >
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
          {isMobile && (
            <IconButton onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="top" open={open} onClose={handleToggle}>
        <NavBarMobile open={open} handleToggle={handleToggle} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
