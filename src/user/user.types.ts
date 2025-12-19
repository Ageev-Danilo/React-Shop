export interface User {
  id: number;
  email: string;
  name?: string;
  password?: string;
}

export interface UserCreateInput extends Omit<User, 'id'> {}