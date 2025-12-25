import { Request, Response } from "express";
import { contactsService } from "./contacts.service";

class ContactsController {
  async getContacts(req: Request, res: Response) {
    const userId = req.user.id;
    const data = await contactsService.getContacts(userId);
    res.json(data);
  }

  async updateContacts(req: Request, res: Response) {
    const userId = req.user.id;
    const data = await contactsService.updateContacts(userId, req.body);
    res.json(data);
  }
}

export const contactsController = new ContactsController();