import { Box } from "@mui/material";

const ChatBlankLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 120px)",
        maxHeight: "calc(100vh - 120px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: (theme) => theme.palette.borderRadius,
        background: (theme) => theme.palette.background.default,
      }}
    >
      Selamat datang di fitur chat kami ^_^
    </Box>
  );
};

export default ChatBlankLayout;
