import { Router } from "express";
import { productController } from "./product.controller";

export const productRouter = Router();

productRouter.get("/products", productController.getAll);
productRouter.get("/products/:id", productController.getById);
productRouter.get('/products/suggestions', productController.getSuggestions);
productRouter.get('/products/same/:id', productController.getSame);
productRouter.get('/products/same-price/:id', productController.getSamePrice);