import client from "@/utils/feathers/client";
import { Box, Fab, TextField } from "@mui/material";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/router";

const ChatInput = ({ session }) => {
  const router = useRouter();

  const create = async (event) => {
    event.preventDefault();
    const { target } = event;
    const { message } = target;
    const payload = {
      text: message.value,
      id_sender: session.id,
      id_receiver: session.receiver,
    };
    try {
      const { data } = await axios.post("/api/messages", payload);
      client
        .service("messages")
        .create(data)
        .then((response) => {
          console.log("mask", response);
        });
      event.target.reset();
      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
        },
      });
    } catch (error) {
      console.log(error);
      alert("gagal");
    }
  };
  return (
    <form onSubmit={create}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          mt: 2,
          background: (theme) => theme.palette.background.default,
          borderRadius: (theme) => theme.palette.borderRadius,
        }}
      >
        <TextField
          id="outlined-basic-email"
          label="Type Something"
          name="message"
          fullWidth
          sx={{ mr: 2 }}
          //   value={inputMessage}
          //   onChange={(e) => setInputMessage(e.target.value)}
        />
        <Box
          sx={{
            width: "130px",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "right",
          }}
        >
          <label htmlFor="file-upload">
            <Fab
              size="medium"
              color="primary"
              aria-label="upload"
              component="span"
            >
              <FeatherIcon icon="paperclip" />
            </Fab>
          </label>

          <Fab size="medium" color="primary" aria-label="add" type="submit">
            <FeatherIcon icon="send" />
          </Fab>
          <TextField
            id="file-upload"
            type="file"
            name="files"
            sx={{
              display: "none",
            }}
          />
        </Box>
      </Box>
    </form>
  );
};

export default ChatInput;
