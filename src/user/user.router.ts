import { Router } from "express";
import { userController } from "./user.controller";
import { validateUserRequest } from "../middlewares/validation.middleware";

const userRouter = Router();

userRouter.post("/register", validateUserRequest, userController.register);
userRouter.post("/login", validateUserRequest, userController.login);
userRouter.get("/", validateUserRequest, userController.getContacts);
userRouter.patch("/", validateUserRequest, userController.updateContacts);


export default userRouter;