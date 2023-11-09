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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdministradorService,DirectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }