import { Router } from "express";
import { productController } from "./controller";

const pRouter = Router();

pRouter.get("/", productController.getAll);
pRouter.get("/:id", productController.getById);

export default pRouter;