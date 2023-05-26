import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { account } = useContext(DataContext);

  return account ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
