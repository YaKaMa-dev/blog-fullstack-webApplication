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
} from "@mui/material";
import ShowSwitchInfo from "../ui/ShowSwitchInfo";
import { Link } from "react-router-dom";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  //functionalities :
  const [showPassword, setShowPassword] = useState(false);

  //data:
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const auth = useAuth();
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    auth.login(e, email, password);
  };

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
        <form>
          <FormControl fullWidth margin="dense">
            <FormLabel>Email</FormLabel>
            <TextField
              fullWidth
              size="small"
              placeholder="exp@example.com"
              type="email"
              name="email"
              required
              value={inputs.email}
              onChange={(e) => onChangeInputs(e)}
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
              name="password"
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
              placeholder="Password"
              size="small"
              required
              value={inputs.password}
              onChange={(e) => onChangeInputs(e)}
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
            sx={{ bgcolor: "support.main", color: "white", marginBottom: 2 }}
            onClick={(e) => handleLogin(e, inputs.email, inputs.password)}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            color="support.main"
          >
            Sign Up
          </Button>
        </form>
      </Box>
      {/* Showing Informations Switched by rounded circles  */}
      <ShowSwitchInfo />
    </Stack>
  );
};

export default Login;
