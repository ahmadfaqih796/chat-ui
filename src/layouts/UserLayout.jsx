import { MainWrapper, PageWrapper } from "@/styles/Wrapper";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function UserLayout({ children }) {
  const [open, setOpen] = React.useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
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
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        isMobile={isMobile}
      />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        isMobileSidebarOpen={isMobileSidebarOpen}
        isMobile={isMobile}
      />
      <PageWrapper>
        <Container maxWidth={false}>
          <Box sx={{ minHeight: "calc(100vh - 170px)", mt: 3 }}>{children}</Box>
          sasas
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}

export default UserLayout;
