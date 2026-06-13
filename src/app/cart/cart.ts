import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../cartservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  public products: any[] = [];
  public grandTotal: number = 0;
  public orderPlaced: boolean = false;

  constructor(private cartService: Cartservice, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  checkout() {
    if (this.products.length === 0) {
      alert('Your cart is empty. Please add some products to checkout.');
      return;
    }

    const now = new Date();
    const order = {
      orderId: Date.now(),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      totalPrice: this.grandTotal,
      products: this.products
    };

    let existingOrders: any[] = JSON.parse(localStorage.getItem('myOrders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('myOrders', JSON.stringify(existingOrders));

    this.cartService.removeAllCart();
    this.orderPlaced = true;
    setTimeout(() => {
      this.router.navigate(['/my-orders']);
    }, 2000);
  }
}