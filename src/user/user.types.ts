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

export interface UpdateContactsDto extends Partial<UserProfileContacts> {}

export interface UserRepositoryContract {
  create(data: UserCreateInput): Promise<User>;

  findByEmail(email: string): Promise<User | null>;

  findById(id: number): Promise<User | null>;

  findByUserId(userId: string): Promise<ContactData | null>;

  updateByUserId(
    userId: string,
    data: UpdateContactsDto
  ): Promise<ContactData>;
}


export interface UserServiceContract {
  register(credentials: RegisterCredentials): Promise<string>;

   login(credentials: LoginCredentials): Promise<string>;

  getContacts(userId: string): Promise<ContactData | null>;

  updateContacts(
    userId: string,
    data: UpdateContactsDto
  ): Promise<ContactData>;
}


export interface UserControllerContract {
  register(req: Request<void, UserAuthenticationResponce | ErrorResponce, RegisterCredentials>, res: Response<UserAuthenticationResponce | ErrorResponce>): Promise<void>;

  login(req: Request<void, UserAuthenticationResponce | ErrorResponce, LoginCredentials>, res: Response<UserAuthenticationResponce | ErrorResponce>): Promise<void>;

  getContacts(req: Request<void, ContactData | null, void, void>, res: Response<ContactData | null>): Promise<void>;

  updateContacts(req: Request<void, ContactData, ContactData, void>, res: Response<ContactData>): Promise<void>;
}