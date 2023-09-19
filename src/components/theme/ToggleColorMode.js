// ToggleColorMode.js
import React, { useContext } from "react";
import { ColorModeContext } from "./ColorModeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ToggleColorMode() {
  const { toggleColorMode, theme } = useContext(ColorModeContext);

  return (
    <>
      {theme.palette.mode} mode
      <button onClick={toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </button>
    </>
  );
}

export default ToggleColorMode;
