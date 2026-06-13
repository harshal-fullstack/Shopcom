import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-order',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './my-order.html',
  styleUrl: './my-order.css'
})
export class MyOrder implements OnInit {
  myOrders: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const orders = localStorage.getItem('myOrders');
    if (orders) {
      this.myOrders = JSON.parse(orders);
    }
  }
}
