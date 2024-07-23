import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Customers2Service } from '../customers2.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customer!: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private customer2Service: Customers2Service
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const customerId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.customer2Service.getCustomerById(customerId)
      .subscribe(customer => this.customer = customer);
  }
}
