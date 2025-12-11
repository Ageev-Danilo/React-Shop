import { Router } from "express";
import { productController } from "./product.controller";

export const productRouter = Router();

productRouter.get("/", productController.getAll);
productRouter.get("/:id", productController.getById);
