import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:8080/api/complaints'  

  constructor(private http: HttpClient) { }

  // Fetch all complaints without pagination
  getAllTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
