// src/app/admin/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://backend-q9mw.onrender.com/api';

  constructor(private http: HttpClient) {}

  getTrainingData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/training`);
  }

  getContactData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact`);
  }

  getHireData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hire`);
  }

  deleteTraining(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/training/${id}`);
}

deleteContact(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/contact/${id}`);
}

deleteHire(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/hire/${id}`);
}

}
