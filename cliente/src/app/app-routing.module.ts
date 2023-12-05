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
import { CoordinadorRegistrosComponent } from './componentes/coordinador-registros/coordinador-registros.component';
import { JefaturaAnteproyectoComponent } from './componentes/jefatura-anteproyecto/jefatura-anteproyecto.component';
import { CoordinadorComentariosComponent } from './componentes/coordinador-comentarios/coordinador-comentarios.component';
import { EvaluadorRegistrosComponent } from './componentes/evaluador-registros/evaluador-registros.component';
import { EvaluadorLlenarFormatoBComponent } from './componentes/evaluador-llenar-formato-b/evaluador-llenar-formato-b.component';
import { LlenarFormatoTICComponent } from './componentes/llenar-formato-ti-c/llenar-formato-ti-c.component';
import { JefaturaProcesosComponent } from './componentes/jefatura-procesos/jefatura-procesos.component';
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
  { path:'directortAnteproyecto/:id', component:DirectorAnteproyectoComponent },
  { path:'evaluadores/:id', component:EvaluadoresComponent },
  { path:'coordinadorRegistro', component:CoordinadorRegistrosComponent },
  { path:'jefaturaAnteproyecto', component:JefaturaAnteproyectoComponent },
  { path:'evaluadorLlenarFormatoB/:id', component:EvaluadorLlenarFormatoBComponent },
  { path:'coordinadorComentarios/:id', component:CoordinadorComentariosComponent },
  { path:'evaluadorRegistros', component:EvaluadorRegistrosComponent },
  { path:'llenaFormatoC/:id', component:LlenarFormatoTICComponent },
  { path:'jefaturaProcesos', component:JefaturaProcesosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
