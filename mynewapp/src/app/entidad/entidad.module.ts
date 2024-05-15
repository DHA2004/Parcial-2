import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadComponent } from './entidad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntidadComponent],
  exports: [EntidadComponent]
})
export class EntidadModule { }
