import styled from "@emotion/styled";
import { ButtonGroup as BtnGroup, Button } from "@mui/material";
import React from "react";

const Component = styled(BtnGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const ButtonGroup = () => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <Button disabled>1</Button>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default ButtonGroup;
