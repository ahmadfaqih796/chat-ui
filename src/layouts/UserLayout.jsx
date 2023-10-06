import { MainWrapper, PageUserWrapper } from "@/styles/Wrapper";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Header from "./header/Header";
import SidebarUser from "./sidebar/SidebarUser";
import { useUserSession } from "@/hooks/auth/useUserSession";

function UserLayout({ children }) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { data, error } = useUserSession();
  console.log("xxxxxxxxxxxxxxx", error);

  const handleDrawerOpen = () => {
    setOpen(true);
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
      <SidebarUser session={data?.data} />
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
