import {
  Box,
  Grow,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import CustomImage from "../custom/CustomImage";
import useFetchUser from "@/hooks/fetch/useFetchUser";

const ChatUserList = ({ setSearch, data, session }) => {
  const { userList, show, loading, setTempQuery } = useFetchUser(session.token);
  const handleSearch = (e) => {
    e.preventDefault();
    setTempQuery(e.target.value);
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
      {loading && <p>Loading...</p>}
      <List
        sx={{
          minHeight: "calc(100vh - 270px)",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {userList &&
          userList.map((row, index) => (
            <Grow in={show} key={row.id} timeout={500}>
              <ListItem
                onClick={(e) => {
                  onClick ? handlePush(e, row.id) : null;
                }}
                sx={{
                  background: "white",
                  borderRadius: "1em",
                  mb: "1em",
                }}
              >
                <ListItemIcon>
                  <CustomImage src={row.photo} alt={row.name} margin="0" />
                </ListItemIcon>
                <ListItemText
                  primary={row.name}
                  secondary={"test chat gan !"}
                />
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
            </Grow>
          ))}
      </List>
    </Box>
  );
};

export default ChatUserList;
