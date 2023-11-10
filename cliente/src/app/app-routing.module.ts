import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministradorComponent} from './componentes/administrador/administrador.component';
import { AdministradorCrearComponent} from './componentes/administrador-crear/administrador-crear.component';
import { AdministradorEditarComponent } from './componentes/administrador-editar/administrador-editar.component';
import { DirectorLlenarFormatoComponent } from './componentes/director-llenar-formato/director-llenar-formato.component';
import { DirectorMainComponent } from './componentes/director-main/director-main.component';
import { DirectorListarFormatosComponent } from './componentes/director-listar-formatos/director-listar-formatos.component';
import { JefaturaMainComponent } from './componentes/jefatura-main/jefatura-main.component';
import { JefaturaRegistrosComponent } from './componentes/jefatura-registros/jefatura-registros.component';


const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },
  { path: 'crearUsuario', component: AdministradorCrearComponent },
  { path: 'editarUsuario/:id', component: AdministradorEditarComponent },
  { path: 'directorLlenarFormato', component: DirectorLlenarFormatoComponent },
  { path: 'directorMain', component: DirectorMainComponent },
  { path: 'directorListar/:id', component: DirectorListarFormatosComponent },
  { path: 'jefaturaMain', component: JefaturaMainComponent },
  { path:'jefaturaRegistro', component:JefaturaRegistrosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }