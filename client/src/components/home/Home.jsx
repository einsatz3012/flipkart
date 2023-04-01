import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";

// components
import NavBar from "./NavBar";
import { getProducts } from "../../redux/actions/productActions";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
