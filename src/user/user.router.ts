import { Router } from "express";
import { userController } from "./user.controller";
import { validateUserRequest } from "../middlewares/validation.middleware";

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/", userController.getContacts);
userRouter.patch("/", userController.updateContacts)
export default userRouter;