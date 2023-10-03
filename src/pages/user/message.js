import ChatBlankLayout from "@/components/chats/ChatBlankLayout";
import ChatInput from "@/components/chats/ChatInput";
import ChatUserList from "@/components/chats/ChatUserList";
import useFetchUser from "@/hooks/fetch/useFetchUser";
import WithAuth from "@/lib/session/withAuth";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3030", {
  path: "/ws/",
});

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

const Message = ({ session }) => {
  const [search, setSearch] = React.useState([]);
  const [onlineUsers, setOnlineUsers] = React.useState([]);
  console.log(onlineUsers);

  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <ChatUserList
          setSearch={(field) => setSearch(field)}
          session={session}
          data={onlineUsers}
        />
      </Grid>
      <Grid item md={8}>
        <ChatBlankLayout />
        <ChatInput
        // session={session}
        // personal={personal}
        // file={file}
        // setFile={(field) => setFile(field)}
        // grup={grup}
        />
      </Grid>
    </Grid>
  );
};
Message.layout = "User";
export default Message;
