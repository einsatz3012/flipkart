import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import React from "react";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled("img")({
  width: "95%",
  padding: "15px"
});

const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 5px;
`;

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          // width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: "2px", background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ marginRight: "2px", background: "#fb641b" }}
      >
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
