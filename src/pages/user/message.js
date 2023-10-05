import ChatBlankLayout from "@/components/chats/ChatBlankLayout";
import ChatInput from "@/components/chats/ChatInput";
import ChatMessagePersonal from "@/components/chats/ChatMessagePersonal";
import ChatUserList from "@/components/chats/ChatUserList";
import { socket } from "@/lib/services/socket";
import WithAuth from "@/lib/session/withAuth";
import { Grid } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps = WithAuth(async function ({ req, query }) {
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
  const router = useRouter();
  const [receivedMessages, setReceivedMessages] = React.useState([]);
  const [file, setFile] = React.useState({});

  const fetchMessage = async () => {
    const { data } = await axios.get(`/api/messages`, {
      params: {
        $limit: -1,
        // grup_name: "guru",
        "$or[0][id_sender]": session.id,
        "$or[0][id_receiver]": session.receiver,
        "$or[1][id_sender]": session.receiver,
        "$or[1][id_receiver]": session.id,
      },
    });
    setReceivedMessages(data);
    console.log("ssssssssssssssss", data);
  };

  React.useEffect(() => {
    fetchMessage();
    socket.on("get", (data) => {
      console.log("masuk", data);
      setReceivedMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [router, session]);

  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <ChatUserList session={session} />
      </Grid>
      <Grid item md={8}>
        {session.receiver ? (
          <ChatMessagePersonal session={session} data={receivedMessages} />
        ) : (
          <ChatBlankLayout />
        )}
        <ChatInput
          session={session}
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
