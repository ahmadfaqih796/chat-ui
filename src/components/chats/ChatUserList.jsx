import useFetchUser from "@/hooks/fetch/useFetchUser";
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
import Image from "next/image";
import NotFound from "../../../public/assets/images/no-data-found.png";
import CustomImage from "../custom/CustomImage";
import SkeletonUser from "../skeleton/SkeletonUser";

const ChatUserList = ({ session }) => {
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

      <List
        sx={{
          maxHeight: "calc(100vh - 170px)",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        {loading ? (
          <SkeletonUser />
        ) : userList.length === 0 ? (
          <Image
            alt="not found"
            src={NotFound}
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          userList.map((row) => (
            <Grow in={show} key={row.id} timeout={500}>
              <ListItem
                onClick={(e) => {
                  handlePush(e, row.id);
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
                    <Typography variant="body2" style={{ color: "green" }}>
                      {/* {row.status ? "online" : "offline"} */}
                      Online
                    </Typography>
                  }
                  align="right"
                ></ListItemText>
              </ListItem>
            </Grow>
          ))
        )}
      </List>
    </Box>
  );
};

export default ChatUserList;
