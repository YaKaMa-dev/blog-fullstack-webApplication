import {
  Typography,
  Stack,
  Box,
  InputAdornment,
  OutlinedInput,
  TextField,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  Fade,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CircleRounded, VisibilityOff, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sliderData, setSliderData] = useState([
    {
      title: "Information 1",
      description: "Description about the information 1.",
      selected: true,
    },
    {
      title: "Information 2",
      description: "Description about the information 2.",
      selected: false,
    },
    {
      title: "Information 3",
      description: "Description about the information 3.",
      selected: false,
    },
  ]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickSlider = (index) => {
    const updatedSliderData = [...sliderData];
    updatedSliderData[index].selected = true;
    updatedSliderData.forEach((item, i) => {
      if (i !== index) item.selected = false;
    });
    setSliderData(updatedSliderData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = sliderData.findIndex((item) => item.selected);
      const nextIndex = (currentIndex + 1) % sliderData.length;
      handleClickSlider(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderData]);

  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      sx={{ minWidth: "100%", minHeight: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: 2,
          width: "50%",
          minHeight: "100%",
          bgcolor: "white",
          padding: 10,
        }}
      >
        <Typography
          variant="h4"
          color="support.main"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          LOGO
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Log in
        </Typography>
        <form action="">
          <FormControl fullWidth margin="dense">
            <FormLabel>Email</FormLabel>
            <TextField
              fullWidth
              size="small"
              placeholder="exp@example.com"
              type="email"
              required
            ></TextField>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel
              sx={{ color: "gray", "&.Mui-focused": { color: "gray" } }}
            >
              Password
            </FormLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              fullWidth
              placeholder="***********"
              size="small"
              required
            />
            <Typography
              variant="body1"
              component={Link}
              to="/ForgotPassword"
              sx={{
                marginTop: 2,
                color: "support.main",
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </Typography>
          </FormControl>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ bgcolor: "support.main", color: "white" }}
          >
            Login
          </Button>
        </form>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          color="support.main"
          // sx={{ bgcolor: "support.main", color: "white" }}
        >
          Sign Up
        </Button>
      </Box>

      <Box
        sx={{
          backgroundImage:
            "url(http://localhost:5173/src/assets/images/auth_image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100%",
          padding: 4,
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          color: "white",
        }}
      >
        {sliderData.map((item) => (
          <Fade key={item.title} in={item.selected} timeout={1000}>
            <Box
              textAlign={"center"}
              style={{ display: item.selected ? "block" : "none" }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "semi-bold" }}
                gutterBottom
              >
                {item.description}
              </Typography>
            </Box>
          </Fade>
        ))}

        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {sliderData.map((item, index) => (
            <IconButton
              key={item.title}
              sx={{ color: sliderData[index].selected ? "white" : "auto" }}
              onClick={() => handleClickSlider(index)}
            >
              <CircleRounded />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
