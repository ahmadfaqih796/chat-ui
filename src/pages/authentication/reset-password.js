import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Button,
  CircularProgress,
  Collapse,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FeatherIcon from "feather-icons-react";
import React from "react";

import { AUTH_MANAGEMENT_CODE } from "@/utils/AuthManagement";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("success");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [template, setTamplate] = React.useState(false);

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] =
    React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { target } = event;
    const { password, passwordConfirm, otp } = target;
    if (password.value.length <= 8 && password.value.length <= 8) {
      setMessage("password harus lebih dari 8 karakter");
      setColor("error");
      setOpen(true);
      setLoading(false);
      return;
    }
    if (password.value != passwordConfirm.value) {
      setMessage("password tidak sama dengan password konfirmasi");
      setColor("error");
      setOpen(true);
      setLoading(false);
      return;
    }
    setOpen(false);
    const payload = {
      action: AUTH_MANAGEMENT_CODE.resetPasswordShort,
      value: {
        user: {
          email: router.query.email ?? "",
        },
        token: otp.value,
        password: password.value,
      },
    };
    try {
      await ServiceAdapter().post("/auth-management", payload);
      setColor("success");
      setMessage(
        "Password berhasil diperbarui, silahkan kembali ke halaman login"
      );
      setOpen(true);
      event.target.reset();
      setLoading(false);
      setTamplate(true);
      setTimeout(() => {
        router.replace("/absen/login");
      }, 5000);
    } catch (error) {
      setMessage(
        error.response.data.message ?? "Terjadi kesalahan pada server"
      );
      setColor("error");
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "90vh",
          width: "300px",
          display: "flex",
          m: "0 auto",
          alignItems: "center",
        }}
      >
        <Box width="100%">
          <Box sx={{ textAlign: "center", mb: "2vh" }}>
            {/* <Image src={logo} alt="bg" width={"100px"} height={"140px"} /> */}
          </Box>
          <Collapse in={open}>
            <Alert
              variant="filled"
              severity={color}
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
              sx={{ mb: 2 }}
            >
              <Typography color={"white"}>{message}</Typography>
            </Alert>
          </Collapse>

          {!template && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormLabel
                htmlFor="password"
                sx={{ color: "#1BA0E2", fontWeight: "700", mt: "3vh" }}
              >
                Password Baru
              </FormLabel>
              <TextField
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Masukan password kamu disini"
                sx={{
                  background: "#1ba0e20d",
                  borderRadius: "6px",
                  border: "1px solid #1ba0e20d",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        <FeatherIcon
                          color="black"
                          icon={passwordVisible ? "eye" : "eye-off"}
                          width="20"
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <CustomFormLabel
                htmlFor="passwordConfirm"
                sx={{ color: "#1BA0E2", fontWeight: "700", mt: "3vh" }}
              >
                Password konfirmasi
              </CustomFormLabel>
              <CustomTextField
                id="passwordConfirm"
                name="passwordConfirm"
                type={passwordConfirmVisible ? "text" : "password"}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Masukan password kamu disini"
                sx={{
                  background: "#1ba0e20d",
                  borderRadius: "6px",
                  border: "1px solid #1ba0e20d",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setPasswordConfirmVisible(!passwordConfirmVisible)
                        }
                      >
                        <FeatherIcon
                          color="black"
                          icon={passwordConfirmVisible ? "eye" : "eye-off"}
                          width="20"
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <CustomFormLabel
                htmlFor="otp"
                sx={{ color: "#1BA0E2", fontWeight: "700" }}
              >
                OTP
              </CustomFormLabel>
              <CustomTextField
                required
                id="otp"
                name="otp"
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Masukan kode otp kamu disini"
                sx={{
                  background: "#1ba0e20d",
                  borderRadius: "6px",
                  border: "1px solid #1ba0e20d",
                }}
              />
              <Button
                color="primary"
                variant="contained"
                disabled={loading}
                size="large"
                type="submit"
                fullWidth
                sx={{
                  pt: "10px",
                  pb: "10px",
                  mt: "5vh",
                  background: "#1BA0E2",
                  fontWeight: "600",
                  borderRadius: "100px",
                }}
              >
                {loading ? <CircularProgress size={25} /> : "Submit"}
              </Button>
            </form>
          )}

          <Box
            mt="5vh"
            width="300px"
            display="flex"
            m="5vh auto 0"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>Kembali ke halaman</Typography>
            <Button
              sx={{ ml: "-10px" }}
              onClick={() => {
                router.push("/absen/login");
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResetPassword;
