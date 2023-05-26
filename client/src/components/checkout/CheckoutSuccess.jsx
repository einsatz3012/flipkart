import React, { useEffect } from "react";
import PaymentState from "./CheckoutState";
import { useDispatch } from "react-redux";
import { cartReset } from "../../redux/actions/cartActions";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartReset);
  }, [dispatch]);

  return (
    <PaymentState
      state="success"
      message="Thank You for the purchase! Happy to Server You."
    />
  );
};

export default CheckoutSuccess;
