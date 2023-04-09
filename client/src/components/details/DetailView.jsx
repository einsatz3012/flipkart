import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItem from "./ActionItem";

const Component = styled(Box)`
  background: #f2f2f2;
`;

const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: 55px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);

  console.log(product);

  const isProductExists = product && Object.keys(product).length > 0;

  return (
    <Component>
      {!loading && isProductExists && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              styled={{ maringTop: "5px", color: "#878787", fontSize: "14px" }}
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
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
