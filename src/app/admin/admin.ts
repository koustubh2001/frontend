import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class Admin implements OnInit {
  trainings: any[] = [];
  contacts: any[] = [];
  hires: any[] = [];

  activeTab: 'training' | 'contact' | 'hire' = 'training';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.adminService.getTrainingData().subscribe(data => this.trainings = data);
    this.adminService.getContactData().subscribe(data => this.contacts = data);
    this.adminService.getHireData().subscribe(data => this.hires = data);
  }

  setTab(tab: 'training' | 'contact' | 'hire') {
    this.activeTab = tab;
  }

  deleteTraining(id: string) {
  if (window.confirm("Are you sure you want to delete?")) {
    this.adminService.deleteTraining(id).subscribe(() => {
      this.trainings = this.trainings.filter(t => t._id !== id);
    });
  }
}

deleteContact(id: string) {
  if (confirm("Are you sure you want to delete this contact record?")) {
    this.adminService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(c => c._id !== id);
    });
  }
}

deleteHire(id: string) {
  if (confirm("Are you sure you want to delete this hire request?")) {
    this.adminService.deleteHire(id).subscribe(() => {
      this.hires = this.hires.filter(h => h._id !== id);
    });
  }
}
}
