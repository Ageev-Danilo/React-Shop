export interface User {
    id: number;
    email: string;
    name?: string;
    password?: string;
}

export type UserCreateInput = Omit<User, 'id'>;