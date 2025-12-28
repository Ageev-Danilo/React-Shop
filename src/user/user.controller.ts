import { userService } from "./user.service";
import { UserControllerContract } from "./user.types";
import { TokenExpiredError, verify } from "jsonwebtoken"
import { ENV } from "../config/env"

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
      const data = req.body
      const user = await userService.login(data);

      res.status(200).json({token: user}); 
    } catch (error: any) {
      res.status(401).json({ message: "Ошибка авторизации" }); 
    }
  },  
  async getContacts(req, res) {
    try {
    res.status(200).json(await userService.getContacts(res.locals.userId));
    // res.json(contactsData);
    
    } catch (error) {
        if (error instanceof Error){
          res.status(500).json({ message: error.message });
        }
    }
  
  },

  async updateContacts(req, res) {
    try {
    const contactsData = await userService.updateContacts(res.locals.userId, req.body);
    res.json(contactsData);
    } catch (error) {
        if (error instanceof Error){
           res.status(500).json({ message: error.message });
        }
    }
   
  }
};