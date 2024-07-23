import { Injectable } from '@angular/core';
import { Customer } from './customer';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  readonly baseUrl = 'http://localhost:9000/api/v1';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllCustomers(): Observable<Customer[]> {
    const url = this.baseUrl + '/customers'
    return this.http.get<Array<Customer>>(this.baseUrl)
      .pipe(catchError(this.handleError<Customer[]>('getCustomers',[])));
  }

  // getCustomerById(id: number): Observable<Customer> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Customer>(url).pipe(
  //     tap(_ => this.log(`fetched customer id=${id}`)),
  //     catchError(this.handleError<Customer>(`getCustomer id=${id}`))
  //   );
  // }

  // getFilteredCustomers(text: string) {
  //   if (text) {
  //     const filteredCustomersList = this.customersList.filter(customers => customers?.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  //     console.log(filteredCustomersList);
  //     return filteredCustomersList;
  //   }
  //   return this.customersList;
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }
}
