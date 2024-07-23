import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  customerService = inject(CustomersService);
  customer!: Customer | undefined;

  constructor() {
    // const customerId = Number(this.route.snapshot.params['id']);
    // console.log(customerId);
    // this.customer = this.customerService.getCustomerById(customerId);
    // console.log(this.customer);
    const customerId = parseInt(this.route.snapshot.params['id'], 10);
    this.customerService.getCustomerById(customerId).then(customer => {
      this.customer = customer;
    });
  }
}
