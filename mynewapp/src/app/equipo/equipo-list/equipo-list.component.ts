import { Component, OnInit } from '@angular/core';
import { EquipoDetail } from '../equipo-detail';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
  equipos: Array<EquipoDetail> = [];
  selected: Boolean = false;
  selectedEquipo!: EquipoDetail;

  onSelected(equipo: EquipoDetail): void {
    if (this.selected && this.selectedEquipo === equipo) {
      this.selected = false;
    } else {
      this.selected = true;
      this.selectedEquipo = equipo;
    }
  }
  closeDetail(): void {
    this.selected = false;
  }
 
  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
    });
  }
 

  ngOnInit() {
    this.getEquipos();
  }
}


