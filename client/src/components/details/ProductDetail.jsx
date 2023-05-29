import { Box, Typography } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";
import React from "react";
import styled from "@emotion/styled";

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const SmallText = styled(Box)`
    font-size: 14px;

    & > p {
      font-size: 14px;
      margin-top: 10px;
    }
  `;

  const StyledBadge = styled(Badge)`
    margin-right: 2px;
    color: #00cc00;
    font-size: 15px;
  `;

  const StyledGrid = styled(Box)`
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 2em;
    padding: 20px;
    font-size: 14px;
  `;

  const DetailsTitle = styled(Typography)`
    color: #878787;
  `;

  const SuperCoinImage = styled(Box)`
    grid-column-start: 1;
    grid-column-end: 3;
  `;

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ maringTop: "5px", color: "#878787", fontSize: "14px" }}
      >
        8 Ratings & 1 Review
        <Box component="span">
          <img
            src={fassured}
            alt="Flipkart Assured"
            style={{ width: "77px", marginLeft: "20px" }}
          />
        </Box>
      </Typography>

      <Typography>
        <Box component="span" style={{ fontSize: "28px" }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
      </Typography>

      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge /> Get extra 20% off upto ₹50 on 1 item(s)
        </Typography>
        <Typography>
          <StyledBadge /> Get extra 13% off (price exlusive of discount)
        </Typography>
        <Typography>
          <StyledBadge /> Sign up for Flipkart Pay Later and get Flipkart Gifts
          Card worth ₹100
        </Typography>
      </SmallText>

      <StyledGrid>
        <Box>
          <DetailsTitle>Delivery</DetailsTitle>
        </Box>
        <Box>
          <strong>Delivery By {date.toDateString()} | ₹40</strong>
        </Box>

        <Box>
          <DetailsTitle>Warranty</DetailsTitle>
        </Box>
        <Box>No Warranty</Box>

        <Box>
          <DetailsTitle>Seller</DetailsTitle>
        </Box>
        <Box>
          <Box>
            <Typography style={{ color: "#2874F0" }}>SuperComNet</Typography>
          </Box>
          GST Invoice Available <br />
          View more sellers starting from ₹{product.price.cost}
        </Box>

        <SuperCoinImage>
          <img
            src={adURL}
            style={{ width: "390px", maxWidth: "100%" }}
            alt="flipkartpoints"
          />
        </SuperCoinImage>

        <Box>
          <DetailsTitle>Descripion</DetailsTitle>
        </Box>
        <Box>{product.description}</Box>
      </StyledGrid>
    </>
  );
};

export default ProductDetail;
