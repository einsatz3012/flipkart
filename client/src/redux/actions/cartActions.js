import axios from "axios";
import * as actionType from "../constants/cartConstant";

const URL = "https://talkative-backend-3qaa.onrender.com";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};

export const cartReset = (dispatch) => {
  dispatch({ type: actionType.CART_RESET });
};
