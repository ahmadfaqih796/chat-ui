import ChatBlankLayout from "@/components/chats/ChatBlankLayout";
import ChatInput from "@/components/chats/ChatInput";
import ChatUserList from "@/components/chats/ChatUserList";
import WithAuth from "@/lib/session/withAuth";
import { Grid } from "@mui/material";

export const getServerSideProps = WithAuth(async function ({ req, query }) {
  const { name } = req.session.user;
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
  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <ChatUserList session={session} />
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
