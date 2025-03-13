import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConciertosPasadosComponent} from './conciertospasados/conciertospasados.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'conciertospasados', component: ConciertosPasadosComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
