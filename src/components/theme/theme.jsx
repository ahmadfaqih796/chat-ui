import { createTheme } from "@mui/material";

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
