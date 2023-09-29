import { experimentalStyled } from "@mui/material";

export const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
  // background: theme.palette.mode == "dark" ? "black" : "#33cc33",
  background: theme.palette.primary.light,
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

export const PageUserWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  // background: theme.palette.mode === "light" ? "#FCF0FB" : "black",
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: "4em",
  borderBottomLeftRadius: "4em",
}));
