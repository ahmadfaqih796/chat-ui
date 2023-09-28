import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import SidebarContent from "./SidebarContent";
import brand from "../../../public/next.svg";
import FeatherIcon from "feather-icons-react";
import NextLink from "next/link";
import Image from "next/image";
import { CustomSidebar } from "@/styles/Global";

const SidebarUser = () => {
  return (
    <CustomSidebar>
      <Box>
        <Image
          src={brand}
          alt="bg"
          style={{
            width: "100%",
            height: "auto",
            padding: "24px",
            marginBottom: "16px",
          }}
        />
        <SidebarContent color={"white"} />
      </Box>
      <Box>
        <List component="li" disablePadding>
          <ListItem
            // onClick={() => {
            //   handleClick(index);
            // }}
            button
          >
            <ListItemIcon sx={{ ml: 0.7 }}>
              <FeatherIcon icon={"x"} width="20" height="20" />
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
