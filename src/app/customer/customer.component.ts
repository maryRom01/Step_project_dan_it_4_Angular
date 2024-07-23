import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  customerService = inject(CustomersService);
  customer!: Customer | undefined;

  constructor() {
    
  }
}
