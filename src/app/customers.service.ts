import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  readonly baseUrl = 'http://localhost:3000/customers';

  protected customersList: Customer[] = [
    { 
      "name": "Customer A",
      "email": "a@bol.com",
      "age": 31,
      "id": 2,
      "accounts": []
    },
    {
      "name": "Customer B",
      "email": "b2@aol.com",
      "age": 38,
      "id": 3,
      "accounts": []
    }
  ]

  protected filteredCustomersList: Customer[] = this.customersList;

  async getAllCustomers(): Promise<Customer[]> {
    // console.log(this.customersList);
    // return this.customersList;
    const data = await fetch(this.baseUrl);
    console.log(data);
    return await data.json() ?? [];
  }

  async getCustomerById(id: number): Promise<Customer | undefined> {
    //return this.customersList.find(customer => customer.id === id);
    const data = await fetch(`${this.baseUrl}/${id}`);
    console.log(data);
    return await data.json() ?? {};
  }

  getFilteredCustomers(text: string) {
    if (text) {
      const filteredCustomersList = this.customersList.filter(customers => customers?.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      console.log(filteredCustomersList);
      return filteredCustomersList;
    }
    return this.customersList;
  }
}
