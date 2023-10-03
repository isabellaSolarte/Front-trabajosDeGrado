import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministradorComponent} from './componentes/administrador/administrador.component';


const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
