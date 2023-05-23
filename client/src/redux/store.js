import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const INITIAL_STATE = {
  getProducts: { products: [] },
  getProductDetails: { product: {} },
  cart: { cartItems: JSON.parse(localStorage.getItem("cartItems")) },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
