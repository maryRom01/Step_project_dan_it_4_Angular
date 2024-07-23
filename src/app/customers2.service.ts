import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Customers2Service {
  readonly baseUrl = 'http://localhost:9000/api/v1/customers';

  protected customersList: Customer[] = []

  protected filteredCustomersList: Customer[] = this.customersList;

  constructor(
    private http: HttpClient
  ) {}

  getAllCustomers(): Observable<Customer[]> {
    console.log('getAllCustomers');
    return this.http.get<Customer[]>(this.baseUrl)
      .pipe(tap(_ => console.log('fetchedCustomers')));
  }

  // async getCustomerById(id: number): Promise<Customer | undefined> {
  //   //return this.customersList.find(customer => customer.id === id);
  //   const data = await fetch(`${this.baseUrl}/${id}`);
  //   console.log(data);
  //   return await data.json() ?? {};
  // }

  // getFilteredCustomers(text: string) {
  //   if (text) {
  //     const filteredCustomersList = this.customersList.filter(customers => customers?.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  //     console.log(filteredCustomersList);
  //     return filteredCustomersList;
  //   }
  //   return this.customersList;
  // }
}
