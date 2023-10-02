import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FeatherIcon from "feather-icons-react";
import CustomImage from "../custom/CustomImage";

const ChatUserList = ({ setSearch, data }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        id="outlined-basic-email"
        name="search"
        placeholder="Cari User"
        onChange={(e) => handleSearch(e)}
        variant="standard"
        fullWidth
        sx={{
          padding: "0.5em 1em",
          borderRadius: "1em",
          background: "white",
          mb: 1,
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <FeatherIcon color="black" icon={"search"} width="20" />
            </InputAdornment>
          ),
        }}
      />
      <List
        sx={{
          minHeight: "calc(100vh - 270px)",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {data &&
          data.map((row, index) => (
            <ListItem
              key={index}
              onClick={(e) => {
                onClick ? handlePush(e, row.id) : null;
              }}
              sx={{
                // background: row.id_user == session.receiver ? "#E4F1FF" : null,
                background: "white",
                borderRadius: "1em",
                mb: "1em",
              }}
            >
              <ListItemIcon>
                <CustomImage src={row.photo} alt={row.name} margin="0" />
              </ListItemIcon>
              <ListItemText primary={row.name} secondary={"test chat gan !"} />
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    style={{ color: row.status ? "green" : "red" }}
                  >
                    {row.status ? "online" : "offline"}
                  </Typography>
                }
                align="right"
              ></ListItemText>
            </ListItem>
          ))}
      </List>
      asas
    </Box>
  );
};

export default ChatUserList;
