import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  readonly baseUrl = 'http://localhost:9000/api/v1/customers';

  protected customersList: Customer[] = [
    { 
      "name": "Customer A",
      "email": "a@bol.com",
      "age": 31,
      "id": 2,
      "accounts": ""
    },
    {
      "name": "Customer B",
      "email": "b2@aol.com",
      "age": 38,
      "id": 3,
      "accounts": ""
    }
  ]

  protected filteredCustomersList: Customer[] = this.customersList;

  getAllCustomers(): Customer[] {
    console.log(this.customersList);
    return this.customersList;
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customersList.find(customer => customer.id === id);
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
