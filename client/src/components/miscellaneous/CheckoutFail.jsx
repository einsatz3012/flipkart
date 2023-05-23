import React from "react";
import { Link } from "react-router-dom";

const CheckoutFail = () => {
  return (
    <div>
      Error while doing Payment
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default CheckoutFail;
