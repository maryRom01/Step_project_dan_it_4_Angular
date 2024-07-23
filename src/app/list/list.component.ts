import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { Router, RouterModule } from '@angular/router';
import { Account } from '../account';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    HttpClientModule
  ],
  providers: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

    customersList: Customer[] = [];
    filteredCustomersList: Customer[] = [];
    emptyAccounts: Account[] = [];

    constructor(
      private customerService: CustomersService
    ) {}

    ngOnInit(): void {
      this.getAllCustomers();
    }

    getAllCustomers(): void {
      this.customerService.getAllCustomers()
      .subscribe(customersList => {
        this.customersList = customersList;
        console.log(this.customersList);
      }
      );
    }

    filterResult(text: string) {
      console.log(text);
      if (!text) {
        this.filteredCustomersList = this.customersList;
        return;
      }

      this.filteredCustomersList = this.customersList.filter(
        customers => customers?.name.toLowerCase().includes(text.toLowerCase())
      );
    }
};
