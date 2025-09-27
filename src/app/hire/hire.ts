import { Component } from '@angular/core';
import { HireService } from './hire.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hire.html',
  styleUrls: ['./hire.scss']
})
export class Hire {
  hireData = {
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  };

  constructor(private hireService: HireService) {}

  submitForm() {
    this.hireService.submitHire(this.hireData).subscribe({
      next: (res) => alert(res.message),
      error: (err) => console.error(err)
    });
  }
}
