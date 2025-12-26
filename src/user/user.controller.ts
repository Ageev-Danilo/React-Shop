import { userService } from "./user.service";
import { UserControllerContract } from "./user.types";


export const userController: UserControllerContract = {
  async register(req, res) {
    try {
      const user = await userService.register(req.body);
      res.status(201).json({token: user}); 
    } catch (error: any) {
      res.status(409).json({ message: error.message }); 
    }
  },

  async login(req, res) {
    try {
      const user = await userService.login(req.body.email);

      res.status(200).json({ message: "Успешный вход", user }); 
    } catch (error: any) {
      res.status(401).json({ message: "Ошибка авторизации" }); 
    }
  },  
  async getContacts(req, res) {
    const userId = req.user.id;
    const data = await userService.getContacts(userId);
    res.json(data);
  },

  async updateContacts(req, res) {
    const userId = req.user.id;
    const data = await userService.updateContacts(userId, req.body);
    res.json(data);
  }
};