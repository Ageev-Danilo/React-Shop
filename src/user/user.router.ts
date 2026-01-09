import { Router } from "express";
import { userController } from "./user.controller";
import { validateUserRequest } from "../middlewares/validation.middleware";

const userRouter = Router();

userRouter.post("/register", validateUserRequest, userController.register);
userRouter.post("/login", validateUserRequest, userController.login);
userRouter.patch("/password_upload", validateUserRequest, userController.passwordUpload);
userRouter.get("/", userController.getContacts);
userRouter.patch("/", userController.updateContacts);

export default userRouter;