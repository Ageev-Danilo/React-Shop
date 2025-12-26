import { client } from "../client/client";
import { UserCreateInput } from "./user.types";
import { UserRepositoryContract, UpdateContactsDto } from "./user.types";


export const userRepository: UserRepositoryContract = {
  async create(data: UserCreateInput) {
    return await client.user.create({ data });
  },

  async findByEmail(email: string) {
    return await client.user.findUnique({
      where: { email },
    });
  },

  async findById(id: number) {
    return await client.user.findUnique({
      where: { id },
    });
  },

  async updateByUserId(userId: string, data: UpdateContactsDto) {
    client.contactData.upsert({
      where: { userId },
      create: { userId, ...data },
      update: data
    });
  }
};