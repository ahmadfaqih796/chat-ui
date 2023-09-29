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
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import brand from "../../../public/next.svg";
import SidebarContent from "./SidebarContent";
import { stringAvatar } from "../header/stringAvatar";

const SidebarUser = () => {
  return (
    <CustomSidebar>
      <Box>
        {/* <Image
          src={brand}
          alt="bg"
          style={{
            width: "100%",
            height: "auto",
            padding: "24px",
            marginBottom: "16px",
          }}
        /> */}
        <Avatar
          {...stringAvatar("Ahmad Faqih Arifin", 80)}
          style={{ margin: "0 auto 1em" }}
        />
        <Typography textAlign="center">Ahmad Faqih Arifin</Typography>
        <Box mt={6}>
          <SidebarContent color={"white"} />
        </Box>
      </Box>
      <Box sx={{}}>
        <List component="li" disablePadding>
          <ListItem
            // onClick={() => {
            //   handleClick(index);
            // }}
            button
          >
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
      </Box>
    </CustomSidebar>
  );
};

export default SidebarUser;
