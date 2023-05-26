import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #ffffff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;s
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img
          src={item.url}
          alt={item.title.shortTitle}
          style={{ width: "110px", height: "110px" }}
        />
        <ButtonGroup id={item.id} quantity={item.quantity} />
      </LeftComponent>
      <Box style={{ margin: "20px" }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="Flipkart Assured"
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Box>
        </SmallText>

        <Typography style={{ margin: "10px" }}>
          <Box
            component="span"
            style={{ fontWeight: "bold", fontSize: "16px" }}
          >
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388e3c" }}>
            {item.price.discount}
          </Box>
        </Typography>

        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
