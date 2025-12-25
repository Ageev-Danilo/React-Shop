import { contactsRepository } from "./contacts.repository";
import { UpdateContactsDto } from "./contacts.types";

class ContactsService {
  getContacts(userId: string) {
    return contactsRepository.findByUserId(userId);
  }

  updateContacts(userId: string, data: UpdateContactsDto) {
    return contactsRepository.updateByUserId(userId, data);
  }
}

export const contactsService = new ContactsService();