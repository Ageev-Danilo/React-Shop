import { client } from "../client/client";
import { Contacts, UserCreateInput, UserRepositoryContract } from "./user.types";

export const UserRepository: UserRepositoryContract = {
  async createUser(data: UserCreateInput) {
    return await client.user.create({ data });
  },

  async findByEmail(email: string) {
    return await client.user.findUnique({ where: { email } });
  },

  async findByUserId(id: number) {
    return await client.contactData.findUnique({ where: { id } });
  },

  async updateByUserId(id: number, data: Contacts) {
    return await client.contactData.upsert({
      where: { id },
      create: { id, ...data },
      update: data
    });
  },

  async updatePassword(email: string, newPassword: string) {
    return await client.user.update({
      where: { email },
      data: { password: newPassword }
    });
  }
};