import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";

// components
import NavBar from "./NavBar";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

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
        <MidSlide products={products} title="Deal of the Day" timer="true" />
        <MidSection />
        <Slide products={products} title="Discount for You" />
        <Slide products={products} title="Suggested Items" />
        <Slide products={products} title="Top Selection" />
        <Slide products={products} title="Recommended Items" />
        <Slide products={products} title="Season's top picks" />
        <Slide products={products} title="Top Deals on Accessories" />
      </Component>
    </>
  );
};

export default Home;
