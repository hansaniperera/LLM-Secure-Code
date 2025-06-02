import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // ❌ Sending credentials in plaintext
    this.http.post<any>('http://localhost:3000/api/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      (response) => {
        if (response.success) {
          // ❌ Storing token in localStorage without encryption
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Invalid login credentials.';
        }
      },
      (error) => {
        this.errorMessage = 'Server error occurred.';
      }
    );
  }
}
