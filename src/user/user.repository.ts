import { client } from "../client/client";
import { Contacts, UserCreateInput } from "./user.types";
import { UserRepositoryContract,  } from "./user.types";


export const UserRepository: UserRepositoryContract = {
  async createUser(data: UserCreateInput) {
    try {
      return await client.user.create({ data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async findByEmail(email) {
    try {
      return await client.user.findUnique({
        where: { email },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async findByUserId(id) {
    try {
      return await client.contactData.findUnique({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async updateByUserId(id, data: Contacts) {
    try {
      return await client.contactData.upsert({
      where: { id },
      create: { id, ...data },
      update: data
    });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};