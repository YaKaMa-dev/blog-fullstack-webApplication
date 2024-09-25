import { Box, Divider, Button, IconButton } from "@mui/material";
import AvatarMenu from "../ui/AvatarMenu";
import LinkItem from "./LinkItem";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const NavBarMobile = ({ handleToggle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: "1.5rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <IconButton
        onClick={handleToggle}
        sx={{
          alignSelf: "flex-end",
        }}
      >
        <CloseIcon />
      </IconButton>
      <LinkItem name="Home" to="/" />
      <LinkItem name="Blog" to="/Blog" />
      <Divider
        sx={{
          bgcolor: "support.main",
          height: "1px",
          width: "100%",
        }}
      />
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
    </Box>
  );
};

export default NavBarMobile;
