import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministradorComponent} from './componentes/administrador/administrador.component';
import { AdministradorCrearComponent} from './componentes/administrador-crear/administrador-crear.component';



const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },
  { path: 'crearUsuario', component: AdministradorCrearComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
