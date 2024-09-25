import { Box, Divider, Button, useMediaQuery } from "@mui/material";
import SearchBar from "../ui/SearchBar";
import AvatarMenu from "../ui/AvatarMenu";
import NotificationBell from "../ui/Norification";
import LinkItem from "./LinkItem";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:800px)");

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
      {!isMobile && (
        <>
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
          <Link to="/Auth">
            <Button
              variant="contained"
              sx={{
                color: "support.main",
                bgcolor: "secondary.main",
                "&:hover": {
                  color: "secondary.main",
                  bgcolor: "support.main",
                },
              }}
            >
              Login
            </Button>
          </Link>
        </>
      )}
      {isMobile && <NotificationBell></NotificationBell>}
    </Box>
  );
};

export default NavBar;
