import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import successSVG from "../../constants/Successful-Payment-color.svg";
import failedSVG from "../../constants/Failed-Payment-color.svg";

const Wrapper = styled(Box)`
  position: relative;
  height: 90vh;
`;

const Container = styled(Box)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Image = styled("img")`
  width: 95%;
  height: 500px;
  margin: auto;
  display: block;
  background: white;
  border-radius: 10px;
  object-fit: contain;
`;

const LinkContainer = styled(Box)`
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  position: relative;
  margin: auto;
  height: 3em;
  padding-top: 1em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PaymentState = ({ state, message }) => {
  return (
    <Wrapper>
      <Container>
        <Image src={state === "fail" ? failedSVG : successSVG} alt={message} />
        <LinkContainer>
          <Typography>{message}</Typography>
          <StyledLink to="/">Go to home</StyledLink>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default PaymentState;
