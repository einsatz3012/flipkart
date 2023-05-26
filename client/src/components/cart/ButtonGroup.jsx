import styled from "@emotion/styled";
import { ButtonGroup as BtnGroup, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const Component = styled(BtnGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const ButtonGroup = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleProductIncrement = () => {
    dispatch(addToCart(id, 1));
  };

  const handleProductDecrement = () => {
    if (quantity > 1) dispatch(addToCart(id, -1));
  };

  return (
    <Component>
      <StyledButton onClick={() => handleProductDecrement()}>-</StyledButton>
      <Button disabled>{quantity}</Button>
      <StyledButton onClick={() => handleProductIncrement()}>+</StyledButton>
    </Component>
  );
};

export default ButtonGroup;
