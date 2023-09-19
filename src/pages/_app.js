import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
