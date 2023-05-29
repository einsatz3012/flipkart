import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import NotFound from "../miscellaneous/NotFound";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)`
  background: #ffffff;
  display: flex;

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 40px;
  & > p {
    margin-top: 10px;
  }

  @media screen and (max-width: 450px) {
    padding-left: 20px;
  }
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
    else if (!product) dispatch(getProductDetails(id));
  }, [id, dispatch, product]);

  const isProductExists = product && Object.keys(product).length > 0;

  return (
    <Component>
      {!loading && isProductExists && (
        <Container container>
          <Grid item lg={4} md={4} sm={9} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={9} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}

      {!loading && !isProductExists && <NotFound />}
    </Component>
  );
};

export default DetailView;
