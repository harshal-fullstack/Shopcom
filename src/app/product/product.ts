import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cartservice } from '../cartservice';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product  implements OnInit {
  products: any[] = [];

  constructor(private apiService: Api,private cartService: Cartservice) { }

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart!');
  }
}


