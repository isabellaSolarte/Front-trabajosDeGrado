import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { DirectorComponent } from './componentes/director/director.component';
import { AppRoutingModule } from './app-routing.module';
import { ModeloComponent } from './componentes/modelo/modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    DirectorComponent,
    ModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
