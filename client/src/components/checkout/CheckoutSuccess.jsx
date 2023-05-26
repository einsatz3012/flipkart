import React from "react";
import PaymentState from "./CheckoutState";

const CheckoutSuccess = () => {
  return (
    <PaymentState
      state="success"
      message="Thank You for the purchase! Happy to Server You."
    />
  );
};

export default CheckoutSuccess;
