import React from "react";
import { Box, Typography } from "@mui/material";
import { notFoundImageURL } from "../../constants/data";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  text-align: center;
  font-size: 14px;
  padding: 20px;
`;

const Image = styled("img")`
  width: 450px;
  max-width: 100%;
`;

const StyledTypography = styled(Typography)`
  font-size: 1.3em;
  padding-top: 10px;
  margin-bottom: 35px;
`;

const Button = styled(Link)`
  background-color: #2874f0;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 16px;
  margin-top: 25px;
  border-radius: 2px;
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Box>
        <Image src={notFoundImageURL} alt="Page not available" />
        <StyledTypography>
          Unfortunately the page you are looking for has been moved or deleted
        </StyledTypography>
        <Button to="/">Go To Homepage</Button>
      </Box>
    </Wrapper>
  );
};

export default NotFound;
