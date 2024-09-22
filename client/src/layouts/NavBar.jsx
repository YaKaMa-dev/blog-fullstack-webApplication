import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import AvatarMenu from "../components/AvatarMenu";
import NotificationBell from "../components/Norification";

const NavBar = () => {
  return (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      <Typography
        variant="h6"
        color="support"
        component={Link}
        to="/"
        sx={{ textDecoration: "none" }}
      >
        Home
      </Typography>
      <Typography
        variant="h6"
        color="support"
        component={Link}
        to="/Blog"
        sx={{ textDecoration: "none" }}
      >
        Blog
      </Typography>
      <SearchBar></SearchBar>
      <NotificationBell></NotificationBell>
      <AvatarMenu></AvatarMenu>
    </Box>
  );
};
export default NavBar;
