import { ContactData, User as PrismaUser } from "../generated/prisma/client";
import { Response, Request } from "express";
import { Prisma } from "../generated/prisma";

export interface UserAuthenticationResponce { token: string }
export interface ErrorResponce { message?: string }

export type LoginCredentials = { email: string; password: string }
export type RegisterCredentials = { email: string; password: string; name: string }
export type User = Prisma.UserGetPayload<{}>
export type UserCreateInput = Prisma.UserUncheckedCreateInput
export type Contacts = Prisma.ContactDataGetPayload<{omit:{id: true}}>

export interface UserRepositoryContract {
  createUser(data: UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByUserId(id: number): Promise<ContactData | null>;
  updateByUserId(id: number, data: Contacts): Promise<ContactData>;
  updatePassword(email: string, newPassword: string): Promise<User>; // Твій метод
}

export interface UserServiceContract {
  register(credentials: RegisterCredentials): Promise<string>;
  login(credentials: LoginCredentials): Promise<string>;
  getContacts(userId: number): Promise<ContactData>;
  updateContacts(userId: number, data: Contacts): Promise<ContactData>;
  updatePassword(email: string, password: string): Promise<User>; // Твій метод
}

export interface UserControllerContract {
  register(req: Request<void, UserAuthenticationResponce | ErrorResponce, RegisterCredentials>, res: Response<UserAuthenticationResponce | ErrorResponce>): Promise<void>;
  login(req: Request<void, UserAuthenticationResponce | ErrorResponce, LoginCredentials>, res: Response<UserAuthenticationResponce | ErrorResponce>): Promise<void>;
  getContacts(req: Request<void, ContactData | ErrorResponce, void, void, {userId: number}>, res: Response<ContactData | ErrorResponce, {userId: number}>): Promise<void>;
  updateContacts(req: Request<void, ContactData | ErrorResponce, Contacts, void, {userId: number}>, res: Response<ContactData | ErrorResponce, {userId: number}>): Promise<void>;
  passwordUpload(req: Request<void, {message: string} | ErrorResponce, any>, res: Response<{message: string} | ErrorResponce>): Promise<void>; // Твій метод
}