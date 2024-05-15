import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  pacientes: Array<Paciente> = [];
  menoresDeEdad: number = 0;
  selectedPaciente!: Paciente; 
  constructor(private PacienteService: PacienteService) { }

  getPacientes() {
    this.PacienteService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
      this.menoresDeEdad = pacientes.filter(paciente => paciente.edad < 18).length;
    });
  }

  ngOnInit() {
    this.getPacientes()
  }


}