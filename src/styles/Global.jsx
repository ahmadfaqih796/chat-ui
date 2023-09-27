import { experimentalStyled } from "@mui/material";

export const CustomSidebar = experimentalStyled("div")(({ theme }) => ({
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
  paddingBottom: "24px",
  background: theme.palette.mode == "dark" ? "black" : "white",
}));
