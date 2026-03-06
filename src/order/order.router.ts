import { Router } from "express";
import { orderController } from "./order.controller";

export const orderRouter = Router();

orderRouter.post("/products-in-order/:id", orderController.addProductToOrder);
orderRouter.get("/products-in-order/:id", orderController.getProductsInOrder);
orderRouter.post("/orders/:id", orderController.createOrder);
orderRouter.get('/orders/:id', orderController.getOrderById);