import React, { useState } from "react";
import { IconButton, Badge, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const notifications = [
  { id: 1, message: "New comment on your post" },
  { id: 2, message: "New follower" },
  { id: 3, message: "Your profile was viewed" },
  // Add more notifications as needed
];

const NotificationBell = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-label="notifications"
        sx={{
          position: "relative",
          color: "support.main",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: "45px" }} // Adjusts the menu position
      >
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleClose}>
              <Typography variant="body2">{notification.message}</Typography>
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose}>
            <Typography variant="body2">No notifications</Typography>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default NotificationBell;
