import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cartservice{
  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any[]>([]);

  constructor() {
    this.loadCart();
  }

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    const existingProduct = this.cartItemList.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItemList.push({ ...product, quantity: 1 });
    }
    this.productList.next(this.cartItemList);
    this.saveCart();
  }
  
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.forEach((item: any) => {
      grandTotal += item.price * item.quantity;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
    this.saveCart();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
  }

  private loadCart() {
    const items = localStorage.getItem('cartItems');
    if (items) {
      this.cartItemList = JSON.parse(items);
      this.productList.next(this.cartItemList);
    }
  }
}