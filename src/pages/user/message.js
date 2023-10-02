import ChatUserList from "@/components/chats/ChatUserList";
import WithAuth from "@/lib/session/withAuth";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
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
  const [onlineUsers, setOnlineUsers] = React.useState([]);
  console.log(onlineUsers);

  const fetchUserData = async () => {
    const { data } = await axios.get(`/api/users`, {
      params: {
        $limit: -1,
        ...(search && {
          "name[$like]": `%${search}%`,
        }),
      },
    });
    setOnlineUsers(data);
  };

  React.useEffect(() => {
    fetchUserData();
  }, [search]);

  return (
    <Grid container>
      <Grid item md={4}>
        <ChatUserList
          setSearch={(field) => setSearch(field)}
          data={onlineUsers}
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
