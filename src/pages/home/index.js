import ToggleColorMode from "@/components/theme/ToggleColorMode";
import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Typography>Hello World</Typography>
      <ToggleColorMode />
    </React.Fragment>
  );
};

export default Home;
