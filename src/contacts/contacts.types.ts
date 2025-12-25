export interface UserProfileContacts {
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate?: string;
  phone: string;
  email: string;
}

export interface UpdateContactsDto extends Partial<UserProfileContacts> {}