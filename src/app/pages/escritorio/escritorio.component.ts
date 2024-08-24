import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../../services/websocket-service';
import { Atender, Ticket } from '../../interfaces/interfaces';

@Component({
   selector: 'app-escritorio',
   templateUrl: './escritorio.component.html',
   styleUrl: './escritorio.component.css'
})
export class EscritorioComponent implements OnInit {

   escritorio: number = 0;
   ticket?: Ticket;

   constructor(
      private route: ActivatedRoute,
      private wsSocket: WebsocketService,
   ) { }

   ngOnInit(): void {
      //console.log(this.route.snapshot.params['id']);
      this.escritorio = this.route.snapshot.params['id'];

      this.wsSocket.emit('on-desk', this.escritorio);
   }

   atender() {
      this.wsSocket.emit('attend-desk', this.escritorio, (atender: Ticket) => {
         console.log('atendiendo', atender);

         this.ticket = atender;
         ;
      });
   }

}
