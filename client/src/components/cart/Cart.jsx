import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)`
  padding: 30px 135px;

  @media screen and (max-width: 900px) {
    padding: 15px 20px;
  }
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #ffffff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #ffffff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #ffffff;
  width: 250px;
  height: 51px;
  border-radius: 2px;

  &:hover {
    background: #fb641b;
  }
`;

const LeftComponent = styled(Grid)`
  padding-right: 15px;

  @media screen and (max-width: 900px) {
    margin-bottom: 15px;
  }
`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length > 0 ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>

            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
