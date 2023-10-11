import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { DirectorComponent } from './componentes/director/director.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministradorEditarComponent } from './componentes/administrador-editar/administrador-editar.component';
import { AdministradorCrearComponent } from './componentes/administrador-crear/administrador-crear.component';

import{ AdministradorService }  from './services/administrador.service';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    DirectorComponent,
    AdministradorEditarComponent,
    AdministradorCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdministradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
