import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      const body = document.getElementsByTagName('body')[0];
      const container = document.getElementsByClassName('container')[0];

      if (!container) {
         console.log('No se encontro');
         body.classList.add('container');
      }

   }

}
