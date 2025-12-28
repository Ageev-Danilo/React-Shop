import { UserRepository } from "./user.repository";
import { Contacts, UserCreateInput } from "./user.types";
import { UserServiceContract, } from "./user.types";
import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { ENV } from "../config/env"
import { StringValue } from 'ms'

export const userService: UserServiceContract = {
  async register(credentials) {
    const existingUser = await UserRepository.findByEmail(credentials.email);
    if (existingUser) throw new Error("Email уже занят");
      const hashedPassword = await hash(credentials.password, 10)

        const hashedCredentials = {
            ...credentials,
            password: hashedPassword
        }
        const newUser = await UserRepository.createUser(hashedCredentials)
        const token = sign({ id: newUser.id }, ENV.JWT_SECRET_KEY, { expiresIn: ENV.JWT_EXPIRES_IN as StringValue })
        return token
    
    // return await UserRepository.createUser(credentials);
  },

  async login(credentials) {
    const user = await UserRepository.findByEmail(credentials.email);
    if (!user) throw new Error("Пользователь не найден");
    const isPasswordValid = await compare(credentials.password, user.password);
    if (!isPasswordValid) throw new Error("Неверный пароль");
    const token = sign({ id: user.id }, ENV.JWT_SECRET_KEY, { expiresIn: ENV.JWT_EXPIRES_IN as StringValue });
    return token;
  },

  async getContacts(id: number) {
    const user = await UserRepository.findByUserId(id);
     if (!user) throw new Error("Пользователь не найден");
     return user

  },

  async updateContacts(id: number, data: Contacts) {
    const user = await UserRepository.updateByUserId(id, data);
     if (!user) throw new Error("Пользователь не найден");
     return user
  }
};