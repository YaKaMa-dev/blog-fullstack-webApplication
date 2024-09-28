import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        margin: "50px auto",
        height: "80svh", // Full viewport height
      }}
    >
      <Box
        sx={{
          bgcolor: "red",
          borderRadius: 2,
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
