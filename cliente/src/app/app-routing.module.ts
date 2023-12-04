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
import { LoginComponent } from './componentes/login/login.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { DirectorAnteproyectoComponent } from './componentes/director-anteproyecto/director-anteproyecto.component';
import { EvaluadoresComponent } from './componentes/evaluadores/evaluadores.component';
import { DirectorComentariosComponent } from './componentes/director-comentarios/director-comentarios.component';
import { CoordinadorRegistrosComponent } from './componentes/coordinador-registros/coordinador-registros.component';
import { JefaturaAnteproyectoComponent } from './componentes/jefatura-anteproyecto/jefatura-anteproyecto.component';
import { CoordinadorLlenarFormatoBComponent } from './componentes/coordinador-llenar-formato-b/coordinador-llenar-formato-b.component';
const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },
  { path: 'crearUsuario', component: AdministradorCrearComponent },
  { path: 'editarUsuario/:id', component: AdministradorEditarComponent },
  { path: 'directorLlenarFormato', component: DirectorLlenarFormatoComponent },
  { path: 'directorMain', component: DirectorMainComponent },
  { path: 'directorListar/:id', component: DirectorListarFormatosComponent },
  { path: 'jefaturaMain', component: JefaturaMainComponent },
  { path:'jefaturaRegistro', component:JefaturaRegistrosComponent },
  { path:'login', component:LoginComponent },
  { path:'modal', component:ModalComponent },
  { path:'directortAnteproyecto', component:DirectorAnteproyectoComponent },
  { path:'evaluadores/:id', component:EvaluadoresComponent },
  { path:'directorComentario', component:DirectorComentariosComponent },
  { path:'coordinadorRegistro', component:CoordinadorRegistrosComponent },
  { path:'jefaturaAnteproyecto', component:JefaturaAnteproyectoComponent },
  { path:'coordinadorLlenarFormatoB', component:CoordinadorLlenarFormatoBComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
