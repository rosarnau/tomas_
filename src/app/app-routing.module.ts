import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'biografia', component: BiografiaComponent }, // Ruta para la página de biografía
  { path: 'agenda', component: CalendarComponent }, // Ruta para la página de amigos
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
