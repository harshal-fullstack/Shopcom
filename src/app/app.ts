import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-ecommerce-app';

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
