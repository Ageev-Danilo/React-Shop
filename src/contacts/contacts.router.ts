import { Router } from "express";
import { contactsController } from "./contacts.controller";
import { validateUserRequest } from "../middlewares/validation.middleware";

const contactsRouter = Router();

contactsRouter.get("/", validateUserRequest, contactsController.getContacts);
contactsRouter.patch("/", validateUserRequest, contactsController.updateContacts);

export default contactsRouter;