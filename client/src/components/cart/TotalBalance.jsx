import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #ffffff;

  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }

  & > h6 {
    margin-bottom: 20px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 600;
`;

const TotalBalance = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const deliveryCharges = 40;

  const totalAmount = () => {
    let price = 0,
      discount = 0;

    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });

    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <Box style={{ paddingRight: "15px" }}>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems && cartItems.length} item/s)
          <Price component="span">{price}</Price>
        </Typography>

        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>

        <Typography>
          Delivery Charges
          <Price component="span">₹{deliveryCharges}</Price>
        </Typography>

        <Typography variant="h6">
          Total Amount
          <Price component="span">₹{price - discount + deliveryCharges}</Price>
        </Typography>

        <Discount>
          You will save ₹{discount - deliveryCharges} on this order
        </Discount>
      </Container>
    </Box>
  );
};

export default TotalBalance;
