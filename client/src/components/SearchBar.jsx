import React, { useState } from "react";
import { IconButton, Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const handleSearchButton = () => {
    setFocused(!focused);
  };

  return (
    <Box
      sx={{
        transition: "width 0.5s ease",
        width: focused ? "300px" : "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          bgcolor: "secondary.main",
          borderRadius: "30px",
          transition: "max-width 0.5s ease",
          maxWidth: focused ? "300px" : "0px",
          transformOrigin: "left",
        }}
      >
        <IconButton
          onClick={handleSearchButton}
          aria-label="search"
          sx={{
            bgcolor: "support.main",
            color: "secondary.main",
            "&:hover": {
              transform: "scale(1.1)",
              bgcolor: "support.main",
            },
          }}
        >
          <SearchIcon />
        </IconButton>

        <InputBase
          placeholder="Search..."
          sx={{
            borderRadius: "30px",
            bgcolor: "secondary.main",
            margin: "0",
            padding: "5px",
            transition: "opacity 0.5s ease, visibility 0.5s ease",
            opacity: focused ? 1 : 0,
            visibility: focused ? "visible" : "hidden",
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
