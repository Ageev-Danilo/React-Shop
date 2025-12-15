import { Router } from "express";
import { categoryController } from "./category.controller";

export const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAll);