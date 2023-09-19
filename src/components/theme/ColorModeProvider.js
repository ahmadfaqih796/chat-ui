// ColorModeProvider.js
import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { amber, deepOrange, grey } from "@mui/material/colors";

export const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [mode, setMode] = React.useState("light");
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem("themeMode", mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
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
          //       // palette values for light mode
          //       primary: amber,
          //       divider: amber[200],
          //       text: {
          //         primary: grey[900],
          //         secondary: grey[800],
          //       },
          //     }
          //   : {
          //       // palette values for dark mode
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
    <ColorModeContext.Provider value={{ toggleColorMode, theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
