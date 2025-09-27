// corporate-training.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-corporate-training',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './corporate-training.html',
  styleUrls: ['./corporate-training.scss']
})
export class CorporateTraining {
  // Form fields
  name: string = '';
  email: string = '';
  phone: string = '';
  training: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
       training: this.training, 
      message: this.message
    };

    // Call backend API
    this.http.post('http://localhost:4000/api/training', formData)
      .subscribe({
        next: (res) => {
          console.log('Form submitted successfully:', res);
          alert('Form submitted successfully!');
          // Clear form
          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        },
        error: (err) => {
          console.error('Error submitting form:', err);
          alert('Failed to submit form.');
        }
      });
  }
}
