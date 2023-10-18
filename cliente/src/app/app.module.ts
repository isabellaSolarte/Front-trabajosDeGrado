import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { DirectorComponent } from './componentes/director-llenar-formato/director-llenar-formato.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministradorEditarComponent } from './componentes/administrador-editar/administrador-editar.component';
import { AdministradorCrearComponent } from './componentes/administrador-crear/administrador-crear.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{ AdministradorService }  from './services/administrador.service';
import { NavigationComponent } from './navigation/navigation.component';
import { DirectorMainComponent } from './componentes/director-main/director-main.component';
import { DirectorListarFormatosComponent } from './componentes/director-listar-formatos/director-listar-formatos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    DirectorComponent,
    AdministradorEditarComponent,
    AdministradorCrearComponent,
    NavigationComponent,
    DirectorMainComponent,
    DirectorListarFormatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdministradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }