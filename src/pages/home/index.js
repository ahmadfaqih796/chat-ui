import ToggleColorMode from "@/components/theme/ToggleColorMode";
import SwipeableTemporaryDrawer from "@/layouts/sidebar/SidebarMobile";
import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Typography>Hello World</Typography>
      <SwipeableTemporaryDrawer />
      <ToggleColorMode />
    </React.Fragment>
  );
};
Home.layout = "User";
export default Home;
