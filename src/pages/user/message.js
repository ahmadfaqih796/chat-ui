import ChatBlankLayout from "@/components/chats/ChatBlankLayout";
import ChatInput from "@/components/chats/ChatInput";
import ChatMessagePersonal from "@/components/chats/ChatMessagePersonal";
import ChatUserList from "@/components/chats/ChatUserList";
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
  console.log("se", session);
  const router = useRouter();
  const [receivedMessages, setReceivedMessages] = React.useState([]);
  const [file, setFile] = React.useState({});

  const fetchMessage = async () => {
    const { data } = await axios.get(`/api/messages`, {
      params: {
        $limit: -1,
        "$or[0][id_sender]": session.id,
        "$or[0][id_receiver]": session.receiver,
        "$or[1][id_sender]": session.receiver,
        "$or[1][id_receiver]": session.id,
      },
    });
    setReceivedMessages(data);
  };

  React.useEffect(() => {
    fetchMessage();
  }, [router, session]);

  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <ChatUserList session={session} />
      </Grid>
      <Grid item md={8}>
        {session.receiver ? (
          <>
            <ChatMessagePersonal session={session} data={receivedMessages} />
            <ChatInput
              session={session}
              // personal={personal}
              // file={file}
              // setFile={(field) => setFile(field)}
              // grup={grup}
            />
          </>
        ) : (
          <ChatBlankLayout />
        )}
      </Grid>
    </Grid>
  );
};
Message.layout = "User";
export default Message;
