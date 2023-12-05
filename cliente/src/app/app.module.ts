import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministradorEditarComponent } from './componentes/administrador-editar/administrador-editar.component';
import { AdministradorCrearComponent } from './componentes/administrador-crear/administrador-crear.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{ AdministradorService }  from './services/administrador.service';
import { NavigationComponent } from './navigation/navigation.component';
import { DirectorMainComponent } from './componentes/director-main/director-main.component';
import { DirectorListarFormatosComponent } from './componentes/director-listar-formatos/director-listar-formatos.component';
import { DirectorLlenarFormatoComponent } from './componentes/director-llenar-formato/director-llenar-formato.component';
import { DirectorService } from './services/director.service';
import { JefaturaRegistrosComponent } from './componentes/jefatura-registros/jefatura-registros.component';
import { JefaturaMainComponent } from './componentes/jefatura-main/jefatura-main.component';
import { JefaturaService } from './services/jefatura.service';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioService } from './services/usuarios.service';
import { ModalComponent } from './componentes/modal/modal.component';
import { DirectorAnteproyectoComponent } from './componentes/director-anteproyecto/director-anteproyecto.component';
import { EvaluadoresComponent } from './componentes/evaluadores/evaluadores.component';
import { CoordinadorRegistrosComponent } from './componentes/coordinador-registros/coordinador-registros.component';
import { CoordinadorService } from './services/coordinador.service';
import { JefaturaAnteproyectoComponent } from './componentes/jefatura-anteproyecto/jefatura-anteproyecto.component';
import { EvaluadorRegistrosComponent } from './componentes/evaluador-registros/evaluador-registros.component';
import { CoordinadorComentariosComponent } from './componentes/coordinador-comentarios/coordinador-comentarios.component';
import { EvaluadorService } from './services/evaluador.service';
import { EvaluadorLlenarFormatoBComponent } from './componentes/evaluador-llenar-formato-b/evaluador-llenar-formato-b.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LlenarFormatoTICComponent } from './componentes/llenar-formato-ti-c/llenar-formato-ti-c.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    AdministradorEditarComponent,
    AdministradorCrearComponent,
    NavigationComponent,
    DirectorMainComponent,
    DirectorListarFormatosComponent,
    DirectorLlenarFormatoComponent,
    DirectorLlenarFormatoComponent,
    JefaturaRegistrosComponent,
    JefaturaMainComponent,
    LoginComponent,
    ModalComponent,
    DirectorAnteproyectoComponent,
    EvaluadoresComponent,
    CoordinadorRegistrosComponent,
    JefaturaAnteproyectoComponent,
    EvaluadorRegistrosComponent,
    CoordinadorComentariosComponent,
    EvaluadorLlenarFormatoBComponent,
    HeaderComponent,
    LlenarFormatoTICComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdministradorService,DirectorService,JefaturaService,UsuarioService,CoordinadorService,EvaluadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }