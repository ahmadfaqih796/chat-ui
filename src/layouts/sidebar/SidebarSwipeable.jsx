import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import SidebarContent from "./SidebarContent";

export default function SidebarSwipeable({ isMobile }) {
  const [state, setState] = useState({
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
    <div>
      {isMobile && (
        <>
          <Button
            sx={{ background: "red" }}
            onClick={toggleDrawer("left", state.left == false ? true : false)}
          >
            Open
          </Button>
          <SwipeableDrawer
            anchor="left"
            open={state.left}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </>
      )}
    </div>
  );
}
