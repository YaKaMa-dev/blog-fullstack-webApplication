import { Box, Typography, Divider } from "@mui/material";
import SearchBar from "../ui/SearchBar";
import { NavLink } from "react-router-dom";
import AvatarMenu from "../ui/AvatarMenu";
import NotificationBell from "./Norification";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        "@media (max-width: 830px)": {
          gap: 2,
        },
      }}
    >
      <LinkItem name="Home" to="/" />
      <LinkItem name="Blog" to="/Blog" />
      <SearchBar></SearchBar>
      <Divider
        sx={{
          bgcolor: "support.main",
          height: "30px",
          width: "1px",
        }}
      />
      <NotificationBell></NotificationBell>
      <AvatarMenu></AvatarMenu>
    </Box>
  );
};

const LinkItem = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      style={() => ({
        textDecoration: "none", // Ensures no underline on links
      })}
    >
      {({ isActive }) => (
        <Typography
          variant="h6"
          color="support"
          sx={{
            fontSize: "1.1rem",
            fontWeight: isActive ? "bold" : "normal",
            scale: isActive ? "scale(1.1)" : "scale(1)",
            "&:hover": {
              transform: "scale(1.1)",
              fontWeight: "bold",
            },
            transition: "transform 0.2s",
          }}
        >
          {name}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavBar;
