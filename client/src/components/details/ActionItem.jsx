import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import React, { useState } from "react";

import { addToCart } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;

  @media screen and (max-width: 900px) {
    padding: 20px 40px;
  }
`;

const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(product.id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    const response = await payUsingPaytm({ amount: 500, email: "chotu@gmail.com" });
    let information = {
      action: "https://securegw.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: "2px", background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ marginRight: "2px", background: "#fb641b" }}
        onClick={() => buyNow()}
      >
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
