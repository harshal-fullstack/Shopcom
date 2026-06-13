import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }

  getAllCarts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/carts`);
  }

  getSingleCart(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/carts/${id}`);
  }

  addNewCart(cart: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/carts`, cart);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/carts/${id}`);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getSingleUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

}
  

