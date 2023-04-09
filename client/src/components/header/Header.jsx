import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

// components
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

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
`;

const Header = () => {
  const completeLogo =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-logo_f64bb3.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
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
