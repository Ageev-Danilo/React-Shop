import { client } from "../client/client";
import { UserProfileContacts, UpdateContactsDto } from "./contacts.types";

class ContactsRepository {
  async findByUserId(userId: string) {
    client.contactData.findUnique({
      where: { userId }
    });
  }

  async updateByUserId(userId: string, data: UpdateContactsDto) {
    client.contactData.upsert({
      where: { userId },
      create: { userId, ...data },
      update: data
    });
  }
}

export const contactsRepository = new ContactsRepository();