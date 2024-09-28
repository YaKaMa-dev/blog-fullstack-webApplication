import { Typography, Stack, Box } from "@mui/material";

const Login = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      sx={{ minWidth: "100%", minHeight: "100%" }}
    >
      <Box sx={{ width: "50%", minHeight: "100%", bgcolor: "white" }}>hhhh</Box>

      <Box
        sx={{
          backgroundImage:
            "url(https://github.com/YaKaMa-dev/blog-fullstack-webApplication/blob/main/client/src/assets/images/auth_image.png)", // Set your image path
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          minHeight: "100%",
          width: "50%", // Set a height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" align="center">
          Welcome to My Section
        </Typography>
      </Box>
    </Stack>
  );
};
export default Login;
