import { Outlet } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";

const AuthLayout = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height
      }}
    >
      <Box
        sx={{
          padding: 3,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};
export default AuthLayout;
