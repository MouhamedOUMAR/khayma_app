import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    this.errorMessage = '';

    // Simulate login (in real app, call authentication service)
    setTimeout(() => {
      if (this.email && this.password) {
        // Successful login
        console.log('Login successful', { email: this.email });
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Veuillez remplir tous les champs';
        this.isLoading = false;
      }
    }, 1000);
  }

  goToRegister() {
    // For now, just show alert
    alert('La page d\'inscription sera disponible prochainement');
  }
}
