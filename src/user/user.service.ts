import { userRepository } from "./user.repository";

export const userService = {
    async register(data: any) {
        const existing = await userRepository.findByEmail(data.email);
        if (existing) throw new Error("CONFLICT");
        return await userRepository.create(data);
    },

    async login(email: string) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error("UNAUTHORIZED");
        return user;
    },

    async updatePassword(email: string, password: string) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error("NOT_FOUND");
        return await userRepository.updatePassword(email, password);
    }
import { UserCreateInput } from "./user.types";
import { UserServiceContract, UpdateContactsDto } from "./user.types";
import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { ENV } from "../config/env"
import { StringValue } from 'ms'

export const userService: UserServiceContract = {
  async register(data: UserCreateInput) {
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) throw new Error("Email уже занят");
      const hashedPassword = await hash(credentials.password, 10)

        const hashedCredentials = {
            ...credentials,
            password: hashedPassword
        }
        const newUser = await UserRepository.createUser(hashedCredentials)
        const token = sign({ id: newUser.id }, ENV.JWT_SECRET_KEY, { expiresIn: ENV.JWT_EXPIRES_IN as StringValue })
        return token
    
    return await userRepository.create(data);
  },

  async login(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Пользователь не найден");
    return user;
  },

  getContacts(userId: number) {
    return userRepository.findById(userId);
  },

  updateContacts(userId: string, data: UpdateContactsDto) {
    return userRepository.updateByUserId(userId, data);
  }
};