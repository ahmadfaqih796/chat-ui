import { Box } from "@mui/material";

const ChatBlankLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 220px)",
        maxHeight: "calc(100vh - 220px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: (theme) => theme.palette.borderRadius,
        background: "white",
      }}
    >
      Selamat datang di fitur chat kami ^_^
    </Box>
  );
};

export default ChatBlankLayout;
