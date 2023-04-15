import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  IconButton,
  Drawer,
  ListItem,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

// components
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const completeLogo =
  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-logo_f64bb3.png";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 56px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
`;

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MenuButton = styled(IconButton)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const StyledDrawer = styled(Drawer)`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const list = () => {
    return (
      <Box style={{ width: "200px" }}>
        <ListItem>
          <CustomButtons />
        </ListItem>
      </Box>
    );
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuButton onClick={() => setOpen(true)}>
          <Menu />
        </MenuButton>

        <StyledDrawer
          open={open}
          onClose={() => setOpen(false)}
          onClick={() => setOpen(false)}
        >
          {list()}
        </StyledDrawer>

        <Component to="/">
          <img src={completeLogo} alt="Flipkart" width="110px" />
        </Component>
        <Search />

        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
