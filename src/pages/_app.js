// App.js
import { ColorModeProvider } from "@/components/theme/ColorModeProvider";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}
