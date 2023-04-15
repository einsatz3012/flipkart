import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material"
import React from "react";
import styled from "@emotion/styled";

const ProductDetail = ({product}) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

  const SmallText = styled(Box)`
    font-size: 14px;

    & > p {
      font-size: 14px;
      margin-top: 10px;
    }
  `;

  const StyledBadge = styled(Badge)`
    margin-right: 2px;
    color: #00CC00;
    font-size: 15px;
  `;

  const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td, & p {
      font-size: 14px;
      margin-top: 10px;
      border: none;
    }
  `;
    
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{maringTop: "5px", color: "#878787", fontSize: "14px"}} >
        8 Ratings & 1 Review
        <Box component="span">
          <img src={fassured} alt="Flipkart Assured" style={{ width: "77px", marginLeft: "20px" }} />
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
        <Typography><StyledBadge /> Get extra 20% off upto ₹50 on 1 item(s) </Typography>
        <Typography><StyledBadge /> Get extra 13% off (price exlusive of discount) </Typography>
        <Typography><StyledBadge /> Sign up for Flipkart Pay Later and get Flipkart Gifts Card worth ₹100 </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{color: "#878787"}}>Delivery</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Delivery By {date.toDateString()} | ₹40 </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{color: "#878787"}}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{color: "#878787"}}>Seller</TableCell>
            <TableCell>
              <Box style={{color: "#2874F0"}}>SuperComNet</Box>
              <Typography>GST Invoice Available</Typography>
              <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan="2" style={{color: "#878787"}}>
              <img src={adURL} style={{width: '390px'}} alt="flipkartpoints" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{color: "#878787"}}>Descripion</TableCell>
            <TableCell>{product.description}
          </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
