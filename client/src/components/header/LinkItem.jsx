import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

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
export default LinkItem;
