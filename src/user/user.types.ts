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