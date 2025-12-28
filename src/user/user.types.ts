import { ContactData } from "../generated/prisma/client";
import { Response, Request } from "express";
import { Prisma } from "../generated/prisma";


export interface UserAuthenticationResponce {
  token: string
}

export interface ErrorResponce {
  message?: string
}

export type LoginCredentials = {
    email: string
    password: string
}
export type RegisterCredentials = {
    email: string
    password: string
    name: string
}

export type User = Prisma.UserGetPayload<{}>

// export interface UserCreateInput extends Omit<User, 'id'> {}
export type UserCreateInput = Prisma.UserUncheckedCreateInput

export interface UserProfileContacts {
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate?: string;
  phone: string;
  email: string;
}

// export interface UpdateContactsDto extends Partial<UserProfileContacts> {}
export type Contacts = Prisma.ContactDataGetPayload<{omit:{id: true}}>

export interface UserRepositoryContract {
  createUser(data: UserCreateInput): Promise<User>;

  findByEmail(email: string): Promise<User | null>;

  findByUserId(id: number): Promise<ContactData | null>;

  updateByUserId(id: number, data: Contacts): Promise<ContactData>;
}


export interface UserServiceContract {
  register(credentials: RegisterCredentials): Promise<string>;

   login(credentials: LoginCredentials): Promise<string>;

  getContacts(userId: number): Promise<ContactData>;

  updateContacts(userId: number,data: Contacts): Promise<ContactData>;
}


export interface UserControllerContract {
  register(req: Request<void, UserAuthenticationResponce | ErrorResponce, RegisterCredentials>, res: Response<UserAuthenticationResponce | ErrorResponce>): Promise<void>;

  login(req: Request<void, UserAuthenticationResponce | ErrorResponce, LoginCredentials>, res: Response<UserAuthenticationResponce | ErrorResponce>): Promise<void>;

  getContacts(req: Request<void, ContactData | ErrorResponce, void, void, {userId: number}>, res: Response<Contacts | ErrorResponce, {userId: number}>): Promise<void>;

  updateContacts(req: Request<void, ContactData | ErrorResponce, ContactData, void, {userId: number}>, res: Response<ContactData | ErrorResponce, {userId: number}>): Promise<void>;
}