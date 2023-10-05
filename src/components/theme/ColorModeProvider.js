import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { deepOrange, grey, purple } from "@mui/material/colors";
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
          ...(mode === "light"
            ? {
                primary: {
                  main: purple[50],
                  light: `linear-gradient(to top, ${purple[700]}, ${purple[300]} 70vh)`,
                  dark: purple[400],
                },
                secondary: {
                  main: "#fff",
                  light: "#fff",
                  dark: "#fff",
                },
                divider: purple[200],
                borderRadius: "1em",
                // text: {
                //   primary: "#fff",
                //   secondary: grey[800],
                // },
              }
            : {
                primary: {
                  main: "#330e62",
                  light: `linear-gradient(to top, #4a148c, #6e43a3 70vh)`,
                  dark: "#330e62",
                },
                divider: "#330e62",
                background: {
                  default: "#6e43a3",
                  paper: "#6e43a3",
                },
                text: {
                  primary: "#fff",
                  secondary: "#fff",
                },
                borderRadius: "1em",
                // text: {
                //   primary: "#fff",
                //   secondary: grey[500],
                // },
              }),
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
