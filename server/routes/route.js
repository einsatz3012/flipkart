import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";
import { userLogin, userSignup } from "../controller/userController.js";
import { stripePaymentGateway } from "../controller/stripePaymentController.cjs";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post("/payment", stripePaymentGateway);

export default router;
