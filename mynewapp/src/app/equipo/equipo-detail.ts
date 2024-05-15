import { Equipo } from "./equipo";
export class EquipoDetail extends Equipo {

  constructor(
    id:Number,
    marca: string, 
    descripcion: string, 
    fotografia_ref: string, 
    precio_alquiler: string,
  ) {
    super(id,marca, descripcion, fotografia_ref, precio_alquiler);
     
  }

}
