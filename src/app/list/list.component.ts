import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { Router, RouterModule } from '@angular/router';
import { Account } from '../account';
import { Customers2Service } from '../customers2.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  customersList: Customer[] = [];
  filteredCustomersList: Customer[] = [];
  
  constructor(
    private customers2Service: Customers2Service
  ) {}

  ngOnInit(): void {
    this.getAllCustomers();
    console.log(this.customersList);
  }

  getAllCustomers():void {
    this.customers2Service.getAllCustomers()
      .subscribe(customers => {
        this.customersList = customers;
        this.filteredCustomersList = customers;
    });
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
