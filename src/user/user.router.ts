import { Router } from 'express';
import { userController } from './user.controller';
import { validateUserRequest } from '../middlewares/validation.middleware';

export const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.patch('/password_upload', userController.passwordUpload);
userRouter.get('/users/profile/:id', userController.getContacts);
userRouter.patch('/users/profile/:id', userController.updateContacts);
userRouter.get('/delivery/:id', userController.getDelivery);
userRouter.patch('/delivery/:id', userController.updateDelivery);