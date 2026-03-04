import { Request, Response } from 'express';
import { emailService } from './email.service';
import { userService } from '../user/user.service';

export const emailController = {
    async sendResetLink(req: Request, res: Response) {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json({ message: "Email обов'язковий" });
            }

            const resetLink = await emailService.sendPasswordResetEmail(email);

            res.status(200).json({
                message: "Лист з посиланням для відновлення пароля відправлено на вашу пошту",
                resetLink, 
            });
        } catch (error: any) {
            console.error('Email send error:', error);
            res.status(500).json({
                message: "Помилка відправки email",
                details: error.text || error.message
            });
        }
    },

    async validateResetToken(req: Request, res: Response) {
        try {
            const { token } = req.query;

            if (!token || typeof token !== 'string') {
                return res.status(400).json({ message: "Токен обов'язковий" });
            }

            const email = emailService.validateToken(token);

            if (!email) {
                return res.status(400).json({ message: "Недійсний або застарілий токен" });
            }

            res.status(200).json({ message: "Токен дійсний", email });
        } catch (error: any) {
            console.error('Token validation error:', error);
            res.status(500).json({ message: "Помилка перевірки токена", details: error.message });
        }
    },

    async resetPassword(req: Request, res: Response) {
        try {
            const { token, password, confirmPassword } = req.body;

            if (!token) return res.status(400).json({ message: "Токен обов'язковий" });
            if (!password || !confirmPassword) return res.status(400).json({ message: "Пароль та підтвердження обов'язкові" });
            if (password !== confirmPassword) return res.status(400).json({ message: "Паролі не співпадають" });
            if (password.length < 7) return res.status(400).json({ message: "Пароль має містити мінімум 7 символів" });

            const email = emailService.validateToken(token);
            if (!email) return res.status(400).json({ message: "Недійсний або застарілий токен" });

            emailService.deleteToken(token);

            res.status(200).json({ message: "Пароль успішно змінено" });
        } catch (error: any) {
            console.error('Password reset error:', error);
            res.status(500).json({ message: "Помилка зміни пароля", details: error.message });
        }
    }
};