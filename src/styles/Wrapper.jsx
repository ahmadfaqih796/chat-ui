import { experimentalStyled } from "@mui/material";

export const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

export const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  borderTop: "3px solid",
  borderLeft: "3px solid",
  borderColor: theme.palette.mode == "dark" ? "white" : "transparent",
  backgroundColor: theme.palette.background.paper,
  marginTop: "70px",
  [theme.breakpoints.up("lg")]: {
    paddingTop: "24px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "24px",
  },
}));
