import { MainWrapper, PageWrapper } from "@/styles/Wrapper";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Header, Sidebar } from ".";

function AdminLayout({ children }) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MainWrapper>
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        isMobile={isMobile}
      />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        isMobile={isMobile}
      />
      <PageWrapper>
        <Container maxWidth={false}>
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}

export default AdminLayout;
