import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  contactData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) {
      alert('Please fill in all required fields!');
      return;
    }

    this.contactService.sendMessage(this.contactData).subscribe({
      next: (res) => {
        alert('Message sent successfully!');
        console.log(res);
        this.contactData = { name: '', phone: '', email: '', message: '' };
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong, please try again later.');
      },
    });
  }
}
