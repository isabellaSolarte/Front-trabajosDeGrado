import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministradorComponent} from './componentes/administrador/administrador.component';
import { AdministradorCrearComponent} from './componentes/administrador-crear/administrador-crear.component';
import { AdministradorEditarComponent } from './componentes/administrador-editar/administrador-editar.component';
import { DirectorComponent } from './componentes/director/director.component';


const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },
  { path: 'crearUsuario', component: AdministradorCrearComponent },
  { path: 'editarUsuario/:id', component: AdministradorEditarComponent },
  { path: 'director', component: DirectorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }