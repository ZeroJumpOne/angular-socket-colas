import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service';
import { Atender } from '../../interfaces/interfaces';

@Component({
   selector: 'app-public',
   templateUrl: './public.component.html',
   styleUrl: './public.component.css'
})
export class PublicComponent implements OnInit {

   //permissionGranted = false;
   audioAutorizacion = false;
   audio?: HTMLAudioElement;
   maximo: number = 0;
   theOne?: Atender;
   atendiendo?: Atender[];

   constructor(
      private wsService: WebsocketService,
   ) {
      this.audio = new Audio('/audio/new-ticket.mp3');
   }

   ngOnInit(): void {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('container');

      this.wsService.listen('attend').subscribe((atendiendo: Atender[]) => {
         // console.log(atendiendo);
         this.atendiendo = atendiendo;
         this.theOne = this.atendiendo.shift();
         this.audio?.play()
            .catch(error => {
               console.log('Error al intentar reproducir el audio', error);
               alert('No se pudo reproducir el audio. Autorizacion requerida por el usuario.');
            });
      });

      this.wsService.listen('maximo').subscribe((maximo) => {
         this.maximo = maximo;
      });

      // this.wsService.listen('ok-audio').subscribe( () => {
      //    this.audioAutorizacion = true;
      // });
   }

   public aceptarAudio() {
      // console.log('se acepto audio');

      this.audioAutorizacion = true;

      // this.wsService.emit('auth-audio', this.audioAutorizacion);
   }

}
