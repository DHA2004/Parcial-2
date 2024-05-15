import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntidadModule } from './entidad/entidad.module';
import { EquipoModule } from './equipo/equipo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntidadModule,
    HttpClientModule,
    EquipoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
