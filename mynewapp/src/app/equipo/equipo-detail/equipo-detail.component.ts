import { Component, OnInit, Input} from '@angular/core';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: []
})
export class EquipoDetailComponent implements OnInit {
  @Input() equipoDetail!: Equipo;
  constructor() { }

  ngOnInit() {
  }

}
