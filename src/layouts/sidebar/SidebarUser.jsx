import ToggleColorMode from "@/components/theme/ToggleColorMode";
import { CustomSidebar } from "@/styles/Global";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/router";
import { stringAvatar } from "../header/stringAvatar";
import SidebarContent from "./SidebarContent";

const SidebarUser = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    router.push("/authentication/login");
  };
  return (
    <CustomSidebar>
      <Box>
        <Avatar
          {...stringAvatar("Ahmad Faqih Arifin", 80)}
          style={{ margin: "0 auto 1em" }}
        />
        <Typography textAlign="center">Ahmad Faqih Arifin</Typography>
        <Box mt={6}>
          <SidebarContent color={"white"} />
        </Box>
      </Box>
      <List component="li" disablePadding>
        <ToggleColorMode />
        <ListItem button onClick={() => handleLogout()}>
          <ListItemIcon sx={{ ml: 0.7 }}>
            <FeatherIcon
              color="white"
              icon={"log-out"}
              width="20"
              height="20"
            />
          </ListItemIcon>
          <ListItemText>
            <Typography>Logout</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </CustomSidebar>
  );
};

export default SidebarUser;
