import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import DetailView from "./components/details/DetailView";
import CheckoutSuccess from "./components/checkout/CheckoutSuccess";
import CheckoutFail from "./components/checkout/CheckoutFail";

import DataProvider from "./context/DataProvider";
import ProtectedRoute from "./components/miscellaneous/ProtectedRoute";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "56px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout/success"
              element={
                <ProtectedRoute>
                  <CheckoutSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout/fail"
              element={
                <ProtectedRoute>
                  <CheckoutFail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
