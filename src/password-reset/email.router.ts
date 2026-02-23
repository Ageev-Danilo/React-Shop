import { Router } from 'express';
import { emailController } from './email.controller';
import { validateResetTokenMiddleware } from '../middlewares/validateResetToken.middleware';

export const emailRouter = Router();

emailRouter.post('/forgot-password', emailController.sendResetLink);

emailRouter.get('/validate-token', emailController.validateResetToken);

emailRouter.post(
    '/reset-password', 
    validateResetTokenMiddleware,  
    emailController.resetPassword   
);