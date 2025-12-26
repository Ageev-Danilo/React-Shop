export interface User {
  id: number;
  email: string;
  name?: string;
  password?: string;
}

export interface UserCreateInput extends Omit<User, 'id'> {}

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
  register(data: UserCreateInput): Promise<User>;

  login(email: string): Promise<User>;

  getContacts(userId: string): Promise<ContactData | null>;

  updateContacts(
    userId: string,
    data: UpdateContactsDto
  ): Promise<ContactData>;
}


export interface UserControllerContract {
  register(req: Request, res: Response): Promise<void>;

  login(req: Request, res: Response): Promise<void>;

  getContacts(req: Request, res: Response): Promise<void>;

  updateContacts(req: Request, res: Response): Promise<void>;
}