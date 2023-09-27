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
      <Box>
        <Card sx={{ p: 1, borderRadius: 2, maxWidth: "500px" }}>
          <TextField
            id="outlined-basic-email"
            sx={{ "& fieldset": { border: "none" } }}
            name="search"
            // onChange={(e) => handleChange(e)}
            size="small"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    sx={{ mr: "-20px" }}
                    // onClick={keyPress}
                  >
                    <FeatherIcon icon="search" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Card>
        <Card></Card>
      </Box>
      <Typography>Hello World</Typography>
    </React.Fragment>
  );
};
Message.layout = "User";
export default Message;
