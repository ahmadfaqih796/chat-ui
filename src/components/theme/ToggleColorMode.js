import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { useContext } from "react";
import { ColorModeContext } from "./ColorModeProvider";

function ToggleColorMode() {
  const { toggleColorMode, theme } = useContext(ColorModeContext);

  return (
    <ListItem button onClick={toggleColorMode}>
      <ListItemIcon sx={{ ml: 0.7 }}>
        <FeatherIcon
          color="white"
          icon={theme.palette.mode === "dark" ? "moon" : "sun"}
          width="20"
          height="20"
        />
      </ListItemIcon>
      <ListItemText>
        <Typography color="white">
          Mode {theme.palette.mode === "dark" ? "Gelap" : "Terang"}
        </Typography>
      </ListItemText>
    </ListItem>
  );
}

export default ToggleColorMode;
