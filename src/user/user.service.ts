import { userRepository } from "./user.repository";
import { UserCreateInput } from "./user.types";
import { UserServiceContract, UpdateContactsDto } from "./user.types";


export const userService: UserServiceContract = {
  async register(data: UserCreateInput) {
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) throw new Error("Email уже занят");
    
    return await userRepository.create(data);
  },

  async login(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Пользователь не найден");
    return user;
  },

  getContacts(userId: string) {
    return userRepository.findByUserId(userId);
  },

  updateContacts(userId: string, data: UpdateContactsDto) {
    return userRepository.updateByUserId(userId, data);
  }
};