import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressDetailsService {
  private apiUrl = 'http://localhost:8080/api/address'; // Base API URL

  constructor(private http: HttpClient) {}

  // Method to send the address details to the backend
  addAddressDetails(addressDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, addressDetails);
  }
}
