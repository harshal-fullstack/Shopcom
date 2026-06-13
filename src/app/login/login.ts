import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = environment.loginUsername || ''; 
  password = environment.loginPassword || ''; 
  errorMessage: string | null = null;

  constructor(private apiService: Api, private router: Router) { }

  onLogin() {
    this.apiService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = 'Login failed. Please check your username and password.';
      }
    });
  }
}


