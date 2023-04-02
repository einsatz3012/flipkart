import React from "react";
import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data";
import styled from "@emotion/styled";

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 55px 130px 0 130px;

  @media screen and (max-width: 1200px) {
    margin: 0px 10px;
    overflow: overlay;
  }
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Container key={data.text}>
          <img src={data.url} alt={data.text} style={{ width: "64px" }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default NavBar;
