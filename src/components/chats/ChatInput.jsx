import { Box, Fab, TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react";

const ChatInput = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        mt: 2,
        background: "white",
        borderRadius: "1em",
      }}
    >
      <Box
        sx={{
          width: "80px",
        }}
      >
        <label htmlFor="file-upload">
          <Fab
            size="medium"
            color="primary"
            aria-label="upload"
            component="span"
          >
            <FeatherIcon icon="upload" />
          </Fab>
        </label>
        <TextField
          id="file-upload"
          type="file"
          name="files"
          sx={{
            display: "none",
            // width: "300px",
          }}
          //  onChange={onSelectFile}
          //  error={errorFiles}
          //  helperText={errorMessage}
        />
      </Box>
      <TextField
        id="outlined-basic-email"
        label="Type Something"
        fullWidth
        sx={{ ml: 1, mr: 1 }}
        //   value={inputMessage}
        //   onChange={(e) => setInputMessage(e.target.value)}
      />
      <Box
        sx={{
          width: "140px",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "right",
        }}
      >
        <Fab
          size="medium"
          color="error"
          aria-label="add"
          type="reset"
          //  onClick={() => {
          //    handleDeleteFile();
          //    setInputMessage("");
          //    setFile({});
          //  }}
        >
          <FeatherIcon icon="trash-2" />
        </Fab>
        <Fab size="medium" color="primary" aria-label="add" type="submit">
          <FeatherIcon icon="send" />
        </Fab>
      </Box>
    </Box>
  );
};

export default ChatInput;
