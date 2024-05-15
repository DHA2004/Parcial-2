import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  exports: [EquipoListComponent],
  declarations: [EquipoListComponent, EquipoDetailComponent]
})
export class EquipoModule { }
