import { Request, Response, NextFunction } from "express";

export const validateUserRequest = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Некоректний email" });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Пароль має бути не менше 6 символів" });
  }

  if (req.path === '/register' && req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({ message: "Паролі не співпадають" });
  }

  next();
};