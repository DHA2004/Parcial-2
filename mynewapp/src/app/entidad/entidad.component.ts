import { Component, OnInit } from '@angular/core';
import { Entidad } from './entidad';
import { dataEntidad } from './dataEntidad';
import { EntidadService } from './entidad.service';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit {
  entidades: Array<Entidad> = [];
  constructor(private entidadService: EntidadService) { }

  getEntidadList(): Array<Entidad> {
    return dataEntidad;
  }

  getEntidades() {
    this.entidadService.getEntidades().subscribe(entidades => {
      this.entidades = entidades;
    });
  }
  ngOnInit() {
    this.entidades = this.getEntidadList();
    this.getEntidades
  }

}