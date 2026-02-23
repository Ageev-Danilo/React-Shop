import { Request, Response, NextFunction } from 'express';
import { emailService } from '../password-reset/email.service';

export const validateResetTokenMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.body.token || req.query.token;

        if (!token) {
            return res.status(400).json({ 
                message: "Токен обов'язковий. Будь ласка, скористайтеся посиланням з email." 
            });
        }

        const email = emailService.validateToken(token as string);

        if (!email) {
            return res.status(400).json({ 
                message: "Недійсний або застарілий токен. Будь ласка, запросіть відновлення пароля знову." 
            });
        }

        req.body.email = email;
        
        next();
    } catch (error) {
        return res.status(500).json({ 
            message: "Помилка перевірки токена" 
        });
    }
};