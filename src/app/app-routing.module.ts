import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { PublicComponent } from './pages/public/public.component';

const routes: Routes = [
   {
      path: 'escritorio/:id',
      component: EscritorioComponent,
   },
   {
      path: 'home',
      component: HomeComponent,
   },
   {
      path: 'nuevo-ticket',
      component: NuevoTicketComponent,
   },
   {
      path: 'publico',
      component: PublicComponent,
   },
   {
      path: '**',
      component: HomeComponent,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
