import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router'; 
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  RouterModule,RouterLink,Footer,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { 
  showModal = false;

  onBookDemoClick() {
    this.showModal = true;
  }   
  close() {
    this.showModal = false;
  }
 
  onSubmit(formData: { fullName: string; email: string; mobile: string; message: string }) {
    console.log('Parent received:', formData);
    this.close();
  }
}

