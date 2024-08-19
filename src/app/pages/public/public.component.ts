import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-public',
   templateUrl: './public.component.html',
   styleUrl: './public.component.css'
})
export class PublicComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      const body = document.getElementsByTagName('body')[0];

      body.classList.remove('container');
   }

}
