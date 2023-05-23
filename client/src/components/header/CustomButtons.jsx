import { Badge, Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { DataContext } from "../../context/DataProvider";

// components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
    align-items: baseline;
  }
`;

const Container = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;

  &:hover {
    background: #ffffff;
  }

  @media screen and (max-width: 900px) {
    background: #2874f0;
    color: #ffffff;

    &:hover {
      background: #2874f0;
    }
  }
`;

const StyledCart = styled(Typography)`
  margin-left: 10px;

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} />
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}

      <Typography style={{ width: "135px" }}>Become a seller</Typography>
      <Typography>More</Typography>

      {account && (
        <Container to="/cart">
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <StyledCart>Cart</StyledCart>
        </Container>
      )}

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
