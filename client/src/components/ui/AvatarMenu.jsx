import React, { useState } from "react";
import { Avatar, Box, Typography, Menu, MenuItem } from "@mui/material";
import { stringAvatar } from "../../utils/helpers";

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        {...stringAvatar("User Name")} // Generates initials
        src="/path/to/image.jpg" // Replace with your image path if available
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          width: 40,
          height: 40,
          bgcolor: "support.main",
        }}
      />
      <Typography
        variant="body1"
        sx={{ marginLeft: 1, cursor: "pointer", color: "support.main" }}
        onClick={handleClick}
      >
        User Name
      </Typography>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
