import WithAuth from "@/lib/session/withAuth";
import { Grid, TextField } from "@mui/material";
import React from "react";

export const getServerSideProps = WithAuth(async function ({ req, query }) {
  const { id, name, token } = req.session.user;
  console.log("ttttttt", name);
  return {
    props: {
      session: {
        ...req.session.user,
        receiver: query.id_receiver || null,
      },
    },
  };
});

const Message = () => {
  const [search, setSearch] = React.useState([]);

  // React.useEffect(() => {}, [search]);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };
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
