import { Account } from "./account";

export interface Customer {
  name: string;
  email: string;
  age: number;
  id: number;
  accounts: Account[];
}
