import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div>
      Payment Completed
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default CheckoutSuccess;
