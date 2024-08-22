import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service';
import { Ticket } from '../../interfaces/interfaces';


@Component({
   selector: 'app-nuevo-ticket',
   templateUrl: './nuevo-ticket.component.html',
   styleUrl: './nuevo-ticket.component.css'
})
export class NuevoTicketComponent implements OnInit {

   ticket?: Ticket;

   constructor(private wsService: WebsocketService) { }

   ngOnInit(): void {
      this.wsService.listen('my-ticket').subscribe( (ticket: Ticket) => {

         console.log(ticket);

         this.ticket = ticket;
      });
   }

   public onNewTicket() {
      console.log('solicitando un nuevo ticket al servidor...');

      this.wsService.emit('new-ticket', () => {

      });

   }

}
