import { Alert, Box, Button, Snackbar, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { addToCart } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { payUsingStripe } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Toast from "../miscellaneous/Toast";

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

const stripePromise = loadStripe(
  "pk_test_51N7c2ESAtE7P9nT4cm0T8ujTp8ijqecf1Ovv1adnvuYPJbZYZQcC6Lhz56tAUzwGip1MbUF8noyvK0vxaSaOJgMq00iM8v3UsZ"
);

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { account } = useContext(DataContext);
  const [quantity] = useState(1);
  const [toastObject, setToastObject] = useState({ open: false, content: "" });

  const addItemToCart = () => {
    if (!account)
      return setToastObject({
        open: true,
        content: "Please login to add Items to Cart",
      });

    dispatch(addToCart(product.id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    if (!account)
      return setToastObject({
        open: true,
        content: "Please login to Purchase an Item",
      });

    const stripe = await stripePromise;
    const requestBody = {
      userName: account,
      email: `${account}@gmail.com`,
      products: { id: product.id, count: 1 },
    };

    const response = await payUsingStripe(requestBody);

    await stripe.redirectToCheckout({
      sessionId: response.id,
    });
  };

  return (
    <>
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

      <Toast toastObject={toastObject} setToastObject={setToastObject} />
    </>
  );
};

export default ActionItem;
