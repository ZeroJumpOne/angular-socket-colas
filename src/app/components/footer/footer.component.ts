import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

   usuario: string = '';



   constructor(public wsService: WebsocketService) { }

   ngOnInit(): void {

      this.wsService.listen('my-id').subscribe((soy) => {
         // console.log({ soy });
         this.usuario = soy;
      });


   }

}
