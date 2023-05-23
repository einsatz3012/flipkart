import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import DetailView from "./components/details/DetailView";
import CheckoutSuccess from "./components/miscellaneous/CheckoutSuccess";
import CheckoutFail from "./components/miscellaneous/CheckoutFail";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "56px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/checkout/fail" element={<CheckoutFail />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
