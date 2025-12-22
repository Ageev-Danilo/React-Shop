import { Router } from "express";
import { userController } from "./user.controller";
import { validateAuth } from "../middlewares/validation.middleware";

export const userRouter = Router();

userRouter.post("/register", validateAuth, userController.register);
userRouter.post("/login", validateAuth, userController.login);
userRouter.patch("/password_upload", validateAuth, userController.passwordUpload);