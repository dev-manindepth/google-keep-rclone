import React from "react";
import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Typography, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../assets/keep.png";

const Header = styled(AppBar)`
  z-index: 1210;
  background-color: #fff;
  height: 75px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;
const Heaading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="" />
        <Heaading>Keep</Heaading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
