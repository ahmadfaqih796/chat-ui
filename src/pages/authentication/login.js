import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, Collapse, IconButton, InputAdornment } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import brand from "../../../public/next.svg";
import InputToken from "@/components/forms/InputToken";

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleLogin = async (event) => {
    setOpen(false);
    event.preventDefault();
    const { target } = event;
    const { email, password } = target;
    const data = {
      email: email.value,
      password: password.value,
      strategy: "local",
    };
    try {
      const fetching = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await fetching.json();
      setOpen(true);
      if (response.code === 401) {
        setColor("error");
        setMessage(response.message);
        return;
      }
      setColor("success");
      setMessage(response.message || "Anda berhasil login");
      router.replace("/home");
    } catch (error) {
      console.log("Error :", error);
      setColor("error");
      setMessage("Terjadi kesalahan pada server");
      setOpen(true);
      return;
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
      alignItems="center"
    >
      <Image
        src={brand}
        alt="bg"
        style={{
          width: "700px",
          height: "100vh",
          margin: "0 auto",
        }}
      />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Collapse in={open}>
            <Alert
              variant="filled"
              severity={color || "info"}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2, mt: 2, width: "100%" }}
            >
              <Typography color={"white"}>{message}</Typography>
            </Alert>
          </Collapse>
          <Box>
            <InputToken />
            <form onSubmit={(e) => handleLogin(e)}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Link href="/authentication/reset-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Login;
