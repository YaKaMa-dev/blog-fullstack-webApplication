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
        display: "flex",
        gap: 2,
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingLeft: focused ? "15px" : "0",
          bgcolor: "secondary.main",
          borderRadius: "30px",
          transition: "max-width 0.5s ease, paddingLeft 0.5s ease",
          maxWidth: focused ? "150px" : "0px",
          transformOrigin: "left",
        }}
      >
        <InputBase
          placeholder="Search..."
          sx={{
            borderRadius: "30px",
            bgcolor: "secondary.main",
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
