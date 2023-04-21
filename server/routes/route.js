import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";
import { userLogin, userSignup } from "../controller/userController.js";
import { addPaymentGateway, paytmResponse } from "../controller/paymentController.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post("/payment", addPaymentGateway);
router.post("/callback", paytmResponse);

export default router;
