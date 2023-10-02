import ToggleColorMode from "@/components/theme/ToggleColorMode";
import {
  Box,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React from "react";

const Message = () => {
  const [search, setSearch] = React.useState([]);

  const fetchUserData = async () => {
    const res = await fetch(`/api/users`, {
      method: "GET",
      params: {
        $limit: -1,
        // "id_user[$ne]": session.id,
        ...(search && {
          "name[$like]": `%${search}%`,
        }),
      },
    });
    console.log("masuk", res);
  };
  React.useEffect(() => {
    fetchUserData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <Grid container>
      <Grid item md={4}>
        <TextField
          id="outlined-basic-email"
          label="Search"
          name="search"
          onChange={(e) => handleSearch(e)}
          size="small"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item md={8}>
        <TextField />
      </Grid>
    </Grid>
  );
};
Message.layout = "User";
export default Message;
