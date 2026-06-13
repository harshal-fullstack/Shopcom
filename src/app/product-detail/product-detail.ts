import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../api';
import { CommonModule } from '@angular/common';
import { Cartservice } from '../cartservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail  implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: Api,
    private cartService: Cartservice,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      if (productId) {
        this.apiService.getSingleProduct(productId).subscribe(data => {
          this.product = data;
        });
      }
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart!');
  }
  
  buyNow(product: any) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);    
  }

  backToProducts() {
    this.router.navigate(['/products']);
  }
}
