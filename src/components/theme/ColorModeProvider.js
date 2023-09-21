import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// import { amber, deepOrange, grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export const ColorModeContext = React.createContext();

export function ColorModeProvider({ children }) {
  const [mode, setMode] = React.useState("light");
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem("themeMode", mode === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // ...(mode === "light"
          //   ? {
          //       primary: amber,
          //       divider: amber[200],
          //       text: {
          //         primary: grey[900],
          //         secondary: grey[800],
          //       },
          //     }
          //   : {
          //       primary: deepOrange,
          //       divider: deepOrange[700],
          //       background: {
          //         default: deepOrange[900],
          //         paper: deepOrange[900],
          //       },
          //       text: {
          //         primary: "#fff",
          //         secondary: grey[500],
          //       },
          //     }),
        },
      }),
    [mode]
  );

  return (
    <Box sx={{ transition: "background-color 0.3s, color 0.3s" }}>
      <ColorModeContext.Provider value={{ toggleColorMode, theme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
}
