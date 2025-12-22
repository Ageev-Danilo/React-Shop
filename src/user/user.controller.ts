import { Request, Response } from "express";
import { userService } from "./user.service";

export const userController = {
    async register(req: Request, res: Response) {
        try {
            const user = await userService.register(req.body);
            res.status(201).json(user);
        } catch (e: any) {
            res.status(409).json({ message: "Користувач вже існує" });
        }
    },

    async login(req: Request, res: Response) {
        try {
            const user = await userService.login(req.body.email);
            if (user.password !== req.body.password) {
                return res.status(401).json({ message: "Невірний пароль" });
            }
            res.status(200).json(user);
        } catch (e: any) {
            res.status(401).json({ message: "Користувача не знайдено" });
        }
    },

    async passwordUpload(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            await userService.updatePassword(email, password);
            res.status(200).json({ message: "Пароль успішно оновлено" });
        } catch (e: any) {
            res.status(404).json({ message: "Користувача не знайдено" });
        }
    }
};