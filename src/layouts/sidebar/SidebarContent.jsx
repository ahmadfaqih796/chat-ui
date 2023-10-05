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

function SidebarContent({ color }) {
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
                <ListItemIcon sx={{ ml: 0.7 }}>
                  <FeatherIcon
                    color={color}
                    icon={item.icon}
                    width="20"
                    height="20"
                  />
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
                      <ListItemIcon sx={{ ml: 0.7 }}>
                        <FeatherIcon
                          color={color}
                          icon={child.icon}
                          width="20"
                          height="20"
                        />
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
                  // selected={pathDirect === item.href}
                  sx={{
                    ...(pathDirect === item.href && {
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: (theme) => theme.palette.primary.main,
                      },
                      "&:before": {
                        content: "''",
                        position: "absolute",
                        width: "0",
                        height: "0",
                        // borderTopLeftRadius: "100%",
                        // borderStyle: "solid",
                        // borderWidth: "24px 24px 24px 0",
                        // borderColor: (theme) => theme.palette.primary.main,
                        borderTop: "16px solid transparent",
                        borderLeft: "16px solid transparent",
                        borderRight: (theme) =>
                          `24px solid ${theme.palette.primary.main}`,
                        top: "-16px",
                        right: "0",
                      },
                      "&:after": {
                        content: "''",
                        position: "absolute",
                        width: "0",
                        height: "0",
                        // borderBottomLeftRadius: "100%",
                        // borderStyle: "solid",
                        // borderWidth: "24px 24px 0 0",
                        // borderColor: (theme) => theme.palette.primary.main,
                        borderBottom: "16px solid transparent",
                        borderLeft: "16px solid transparent",
                        borderRight: (theme) =>
                          `24px solid ${theme.palette.primary.main}`,
                        bottom: "-16px",
                        right: "0",
                      },
                    }),
                  }}
                >
                  <ListItemIcon sx={{ ml: 0.7 }}>
                    <FeatherIcon
                      color={
                        (pathDirect === item.href
                          ? (theme) => theme.palette.text.primary
                          : null) ?? color
                      }
                      icon={item.icon}
                      width="20"
                      height="20"
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        ...(pathDirect === item.href && {
                          color: (theme) => theme.palette.text.primary,
                        }),
                      }}
                    >
                      {item.title}
                    </Typography>
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
