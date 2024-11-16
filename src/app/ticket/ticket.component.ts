import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tickets: any[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadTickets();  
  }

  loadTickets(): void {
    this.ticketService.getAllTickets().subscribe(
      (response) => {
        this.tickets = response;
      },
    );
  }
}
