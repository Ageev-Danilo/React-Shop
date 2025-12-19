import { Request, Response } from "express";
import { userService } from "./user.service";

export const userController = {
  async register(req: Request, res: Response) {
    try {
      const user = await userService.register(req.body);
      res.status(201).json(user); 
    } catch (error: any) {
      res.status(409).json({ message: error.message }); 
    }
  },

  async login(req: Request, res: Response) {
    try {
      const user = await userService.login(req.body.email);

      res.status(200).json({ message: "Успешный вход", user }); 
    } catch (error: any) {
      res.status(401).json({ message: "Ошибка авторизации" }); 
    }
  }
};