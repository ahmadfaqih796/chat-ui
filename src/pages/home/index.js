import ToggleColorMode from "@/components/theme/ToggleColorMode";
import SwipeableTemporaryDrawer from "@/layouts/sidebar/SidebarSwipeable";
import { Card, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Typography>Hello World</Typography>
      <Card>asaass</Card>
      <SwipeableTemporaryDrawer />
      <ToggleColorMode />
    </React.Fragment>
  );
};
Home.layout = "Admin";
export default Home;
