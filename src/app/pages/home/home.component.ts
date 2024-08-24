import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

   constructor(
      private router: Router,
   ) { }

   ngOnInit(): void {
      const body = document.getElementsByTagName('body')[0];
      const container = document.getElementsByClassName('container')[0];

      if (!container) {
         console.log('No se encontro');
         body.classList.add('container');
      }
   }

   public entrar(valor: string) : void {
      console.log('escritorio', valor);


      if (!valor) return;

      this.router.navigate(['/escritorio', valor]);



   }



}
