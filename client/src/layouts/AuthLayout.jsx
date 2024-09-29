import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        margin: "5px auto",
        height: "98vh", // Full viewport height
      }}
    >
      <Box
        sx={{
          bgcolor: "red",
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: 3,
          height: "100%",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};
export default AuthLayout;
