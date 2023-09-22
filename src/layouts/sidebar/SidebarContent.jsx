import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Menuitems from "./MenuItems";

function SidebarContent() {
  const [open, setOpen] = useState(-1); // Store the index of the open dropdown menu
  const router = useRouter();

  const handleClick = (index) => {
    if (open === index) {
      // If the same dropdown is clicked, close it
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const isDropdownOpen = (index) => {
    return open === index;
  };

  const handleTitle = (title) => {
    // Handle setting the title when a dropdown menu item is clicked
    // You can implement your logic here
  };

  const pathDirect = router.asPath;

  return (
    <List sx={{ p: 0 }}>
      {Menuitems.map((item, index) => {
        if (item.subheader) {
          return (
            <li key={item.subheader}>
              <Typography
                variant="subtitle2"
                fontWeight="500"
                sx={{
                  my: 2,
                  opacity: "0.4",
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {item.subheader}
              </Typography>
            </li>
          );
        } else if (item.children) {
          return (
            <React.Fragment key={item.title}>
              <ListItemButton
                component="li"
                onClick={() => handleClick(index)}
                selected={pathDirect === item.href}
              >
                <ListItemIcon sx={{ ml: 0.5 }}>
                  <FeatherIcon icon={item.icon} width="20" height="20" />
                </ListItemIcon>
                <ListItemText>
                  <Typography>{item.title}</Typography>
                </ListItemText>
                {isDropdownOpen(index) ? (
                  <FeatherIcon icon="chevron-down" size="16" fill="black" />
                ) : (
                  <FeatherIcon icon="chevron-right" size="16" fill="black" />
                )}
              </ListItemButton>
              <Collapse in={isDropdownOpen(index)} timeout="auto" unmountOnExit>
                <List component="li" disablePadding>
                  {item.children.map((child) => (
                    <ListItem
                      key={child.title}
                      button
                      selected={pathDirect === child.href}
                      onClick={
                        pathDirect === child.href
                          ? null
                          : () => {
                              router.replace(child.href);
                              handleTitle(child.title);
                            }
                      }
                    >
                      <ListItemIcon sx={{ ml: 0.5 }}>
                        <FeatherIcon icon={child.icon} width="20" height="20" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body1">{child.title}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          );
        } else {
          return (
            <List component="li" disablePadding key={item.title}>
              <NextLink href={item.href}>
                <ListItem
                  onClick={() => {
                    handleClick(index);
                  }}
                  button
                  selected={pathDirect === item.href}
                >
                  <ListItemIcon sx={{ ml: 0.5 }}>
                    <FeatherIcon icon={item.icon} width="20" height="20" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>{item.title}</Typography>
                  </ListItemText>
                </ListItem>
              </NextLink>
            </List>
          );
        }
      })}
    </List>
  );
}

export default SidebarContent;
