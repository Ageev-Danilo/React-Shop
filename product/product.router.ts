import { Router } from "express";
import { productController } from "./product.controller";

const pRouter = Router();

pRouter.get("/", productController.getAll);
pRouter.get("/:id", productController.getById);

export default pRouter;