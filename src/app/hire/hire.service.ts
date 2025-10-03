import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HireService {
  private apiUrl = 'http://localhost:3000/api/hire';

  constructor(private http: HttpClient) {}

 submitHire(data: any): Observable<any> {
  return this.http.post(this.apiUrl, data);
}
}
