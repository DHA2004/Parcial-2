export class Historial {
  fecha: string;
  sintomas: string;

  constructor(fecha: string, sintomas: string) {
    this.fecha = fecha;
    this.sintomas = sintomas;
  }
}

export class Paciente {
  nombre: string;
  edad: number;
  diagnostico: string;
  historial: Historial[];

  constructor(nombre: string, edad: number, diagnostico: string, historial: Historial[]) {
    this.nombre = nombre;
    this.edad = edad;
    this.diagnostico = diagnostico;
    this.historial = historial;
  }
}
