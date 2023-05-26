import React from "react";
import PaymentState from "./CheckoutState";

const CheckoutFail = () => {
  return (
    <PaymentState
      state="fail"
      message="Couldn't complete purchase! Apologies for the incovenience caused."
    />
  );
};

export default CheckoutFail;
