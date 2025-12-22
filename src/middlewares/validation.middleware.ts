import { Request, Response, NextFunction } from "express";

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Некоректний email" });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ message: "Пароль має бути не менше 6 символів" });
    }

    if (req.path === '/register' && password !== confirmPassword) {
        return res.status(400).json({ message: "Паролі не співпадають" });
    }

    next();
};