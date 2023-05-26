import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";
import { DataContext } from "../../context/DataProvider";

import { payUsingStripe } from "../../service/api";
import { loadStripe } from "@stripe/stripe-js";

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

const stripePromise = loadStripe(
  "pk_test_51N7c2ESAtE7P9nT4cm0T8ujTp8ijqecf1Ovv1adnvuYPJbZYZQcC6Lhz56tAUzwGip1MbUF8noyvK0vxaSaOJgMq00iM8v3UsZ"
);

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { account } = useContext(DataContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const buyNow = async () => {
    if (!account) return;

    const stripe = await stripePromise;
    const requestBody = {
      userName: account,
      email: `${account}@gmail.com`,
      products: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    const response = await payUsingStripe(requestBody);

    await stripe.redirectToCheckout({
      sessionId: response.id,
    });
  };

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
              <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
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
