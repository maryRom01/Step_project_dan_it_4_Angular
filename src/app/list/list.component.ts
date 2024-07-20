import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../customer';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    customer1: Customer = { 
        "name": "Customer B",
        "email": "b@bol.com",
        "age": 31,
        "id": 2,
        "accounts": ""
      };

    customer2: Customer = {
        "name": "Customer B",
        "email": "b2@aol.com",
        "age": 38,
        "id": 3,
        "accounts": ""
      }

    customers = [
        this.customer1,
        this.customer2
      ]
};
