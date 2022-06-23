export interface Hair {
  color: string;
  type: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Coordinates2 {
  lat: number;
  lng: number;
}

export interface Address2 {
  address: string;
  city: string;
  coordinates: Coordinates2;
  postalCode: string;
  state: string;
}

export interface Company {
  address: Address2;
  department: string;
  name: string;
  title: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

export type IReduxUser = Pick<
  IUser,
  "id" | "firstName" | "lastName" | "age" | "company" | "image"
>;