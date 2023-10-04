import { experimentalStyled } from "@mui/material";

export const CustomSidebar = experimentalStyled("div")(() => ({
  width: 240,
  height: "100vh",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  borderTopRightRadius: "32px",
  borderBottomRightRadius: "32px",
  paddingTop: "3em",
  paddingBottom: "2em",
  color: "white",
  // background: theme.palette.mode == "dark" ? "black" : "white",
}));
