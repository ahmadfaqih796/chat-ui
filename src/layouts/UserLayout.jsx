import { MainWrapper, PageUserWrapper, PageWrapper } from "@/styles/Wrapper";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import SidebarUser from "./sidebar/SidebarUser";

function UserLayout({ children }) {
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
      {isMobile && (
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          isMobile={isMobile}
        />
      )}
      <SidebarUser />
      <PageUserWrapper>
        <Container maxWidth={false}>
          <Box sx={{ minHeight: "calc(100vh - 0px)", padding: "3em 1em" }}>
            {children}
          </Box>
        </Container>
      </PageUserWrapper>
    </MainWrapper>
  );
}

export default UserLayout;
