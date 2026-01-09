import { userService } from "./user.service";
import { UserControllerContract } from "./user.types";

export const userController: UserControllerContract = {
  async register(req, res) {
    try {
      const token = await userService.register(req.body);
      res.status(201).json({ token });
    } catch (error: any) {
      res.status(409).json({ message: error.message });
    }
  },

  async login(req, res) {
    try {
      const token = await userService.login(req.body);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  },

  async getContacts(req, res) {
    try {
      const data = await userService.getContacts(res.locals.userId);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateContacts(req, res) {
    try {
      const data = await userService.updateContacts(res.locals.userId, req.body);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async passwordUpload(req, res) {
    try {
      const { email, password } = req.body;
      await userService.updatePassword(email, password);
      res.status(200).json({ message: "Пароль успішно оновлено" });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
};