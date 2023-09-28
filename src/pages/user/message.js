import ToggleColorMode from "@/components/theme/ToggleColorMode";
import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React from "react";

const Message = () => {
  return (
    <React.Fragment>
      <ToggleColorMode />
      <Typography>Hello World</Typography>
    </React.Fragment>
  );
};
Message.layout = "User";
export default Message;
