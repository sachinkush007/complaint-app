import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  // Method to send the contact details to the backend
  addContactDetails(contactDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactDetails);
  }
}
