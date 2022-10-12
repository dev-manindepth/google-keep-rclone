import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete, LightbulbOutlined as Lightbulb } from "@mui/icons-material";

const NavList = ({ open }) => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <Lightbulb />,
    },
    {
      id: 2,
      name: "Archive",
      icon: <Archive />,
    },
    {
      id: 3,
      name: "Trash",
      icon: <Delete />,
    },
  ];

  /**
   * disablePadding sx={{ display: "block" }}
   */
  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
