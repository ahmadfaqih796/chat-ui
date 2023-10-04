import TokenField from "@/components/forms/TokenField";
import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert, CircularProgress, Collapse, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import brand from "../../../public/next.svg";

const Login = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [token, setToken] = React.useState("");
  const validation = router.query?.status && router.query?.email;

  const handleGetOTP = async (event) => {
    setLoading(true);
    setOpen(false);
    event.preventDefault();
    const { target } = event;
    const { email } = target;
    const payload = {
      email: email.value,
      action: "sendResetPwd",
      value: {
        email: email.value,
      },
    };
    try {
      const fetching = await fetch("/api/auth/management", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await fetching.json();
      console.log("rrrrrrrrrr", response);
      setOpen(true);
      setLoading(false);
      if (response.code === 400) {
        setColor("error");
        setMessage(response.message);
        return;
      }
      router.replace({
        pathname: router.pathname,
        query: {
          email: email.value,
          status: true,
        },
      });
      setColor("success");
      setMessage(
        "Kode OTP sudah terkirim ke alamat Email, harap periksa dan masukkan kode OTPnya"
      );
    } catch (error) {
      console.log("Error :", error);
      setColor("error");
      setMessage("Terjadi kesalahan pada server");
      setOpen(true);
      setLoading(false);
      return;
    }
  };

  const handleNewPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    setOpen(false);
    const { target } = event;
    const { email, password } = target;
    const payload = {
      action: "resetPwdShort",
      value: {
        user: {
          email: router.query.email ?? email.value,
        },
        token: token,
        password: password.value,
      },
    };
    try {
      const fetching = await fetch("/api/auth/management", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await fetching.json();
      setOpen(true);
      setLoading(false);
      if (response.code === 400) {
        setColor("error");
        setMessage(response.message);
        return;
      }
      router.replace({
        pathname: "/authentication/login",
        query: {
          email: email.value,
          status: true,
        },
      });
      setColor("success");
      setMessage(
        response.message ??
          "Password berhasil di reset harap kembali ke halaman Login"
      );
    } catch (error) {
      console.log("Error :", error);
      setColor("error");
      setMessage("Terjadi kesalahan pada server");
      setOpen(true);
      setLoading(false);
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
            Reset Password
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
            <form
              onSubmit={(e) =>
                validation ? handleNewPassword(e) : handleGetOTP(e)
              }
            >
              <TextField
                id="email"
                label="Email Address"
                name="email"
                margin="normal"
                required
                fullWidth
                disabled={validation ? true : false}
                InputLabelProps={{
                  shrink: validation ? true : false,
                }}
                value={router.query.email || ""}
                // autoComplete="email"
                autoFocus
              />
              {validation && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                  />
                  <TokenField
                    setData={(field) => {
                      setToken(field);
                    }}
                  />
                </>
              )}

              {loading ? (
                <CircularProgress
                  sx={{ marginLeft: "auto", marginRight: "auto" }}
                />
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Kirim
                </Button>
              )}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1 }}
                onClick={() => {
                  router.replace("/authentication/login");
                }}
              >
                Kembali
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Login;
