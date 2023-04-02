import { Box } from "@mui/material";
import React from "react";
import Slide from "./Slide";
import styled from "@emotion/styled";

const Component = styled(Box)`
  display: flex;
  width: 100vw;
  max-width: calc(100% - 10px);
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

const Left = styled(Box)`
  width: calc(100% - 217px);
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Right = styled(Box)`
  background: #ffffff;
  margin-top: 10px;
  display: flex;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Image = styled("img")`
  width: 217px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const MidSlide = (props) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <Left>
        <Slide {...props} />
      </Left>
      <Right>
        <Image src={adURL} alt="Advertisement" style={{ width: "217px" }} />
      </Right>
    </Component>
  );
};

export default MidSlide;
