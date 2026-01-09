import { UserRepository } from "./user.repository";
import { UserServiceContract } from "./user.types";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";
import { StringValue } from 'ms';

export const userService: UserServiceContract = {
  async register(credentials) {
    const existingUser = await UserRepository.findByEmail(credentials.email);
    if (existingUser) throw new Error("Email уже занят");
    
    const hashedPassword = await hash(credentials.password, 10);
    const newUser = await UserRepository.createUser({ ...credentials, password: hashedPassword });
    
    return sign({ id: newUser.id }, ENV.JWT_SECRET_KEY, { expiresIn: ENV.JWT_EXPIRES_IN as StringValue });
  },

  async login(credentials) {
    const user = await UserRepository.findByEmail(credentials.email);
    if (!user) throw new Error("Пользователь не найден");
    
    const isPasswordValid = await compare(credentials.password, user.password);
    if (!isPasswordValid) throw new Error("Неверный пароль");
    
    return sign({ id: user.id }, ENV.JWT_SECRET_KEY, { expiresIn: ENV.JWT_EXPIRES_IN as StringValue });
  },

  async getContacts(id: number) {
    const data = await UserRepository.findByUserId(id);
    if (!data) throw new Error("Контакты не найдены");
    return data;
  },

  async updateContacts(id: number, data) {
    return await UserRepository.updateByUserId(id, data);
  },

  async updatePassword(email, password) {
    const hashedPassword = await hash(password, 10);
    return await UserRepository.updatePassword(email, hashedPassword);
  }
};