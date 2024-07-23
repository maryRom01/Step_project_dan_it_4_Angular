import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class Customers2Service {
  readonly baseUrl = 'http://localhost:9000/api/v1';

  protected customersList: Customer[] = []

  protected filteredCustomersList: Customer[] = this.customersList;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAllCustomers(): Observable<Customer[]> {
    console.log('getAllCustomers');
    const url = `${this.baseUrl}/customers`;
    return this.http.get<Customer[]>(url)
      .pipe(
        tap(_ => console.log('fetchedCustomers')),
        catchError(this.handleError<Customer[]>('getCustomers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }

  getCustomerById(id: number): Observable<Customer | undefined> {
    const url = `${this.baseUrl}/customer/id?id=${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  // getFilteredCustomers(text: string) {
  //   if (text) {
  //     const filteredCustomersList = this.customersList.filter(customers => customers?.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  //     console.log(filteredCustomersList);
  //     return filteredCustomersList;
  //   }
  //   return this.customersList;
  // }
}
