import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.scss']
})
export class AdminLogin {
  email = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  // Email/password login
  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        console.log('Email login successful');
        this.router.navigate(['/Admin']); // Redirect to admin panel
      })
      .catch((err) => {
  console.error('Email login error:', err.message);
  this.error = 'Invalid email or password! Please try again.';
});
  }

  // Google login
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then(() => {
        console.log('Google login successful');
        this.router.navigate(['/Admin']); // Redirect to admin panel
      })
      .catch((err) => {
  console.error('Email login error:', err.message);
  this.error = 'Invalid email or password! Please try again.';
});
  }
}
