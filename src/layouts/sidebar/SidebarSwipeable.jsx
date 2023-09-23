import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import SidebarContent from "./SidebarContent";
import { IconButton } from "@mui/material";

const SidebarSwipeable = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, height: "100vh", mt: "70px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SidebarContent />
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("left", state.left == false ? true : false)}
        edge="start"
        sx={{
          marginRight: 5,
        }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SidebarSwipeable;
