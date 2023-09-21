import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert, Collapse, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React, { useState } from "react";
// image
// import brand from "../../../assets/images/ujianOnline.png";

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
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log("vvvvv", res);
      setColor(res.code === 401 ? "error" : "success");
      setMessage(res.message || "Anda berhasil login");
      setOpen(true);
    } catch (error) {
      console.log("ddddddddddddd", error);
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
      {/* <Image className="brand-login" src={brand} alt="bg" /> */}
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
                type="password"
                id="password"
                autoComplete="current-password"
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
                <Link href="#" variant="body2">
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
