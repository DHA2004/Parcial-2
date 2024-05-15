export class Equipo {
    id: Number;
    marca: string;
    descripcion: string;
    fotografia_ref:string;
    precio_alquiler:string;


constructor(
    id: Number,
    marca: string,
    descripcion: string,
    fotografia_ref:string,
    precio_alquiler:string,

)
{
    this.id= id;
    this.marca = marca;
    this.descripcion = descripcion;
    this.fotografia_ref = fotografia_ref;
    this.precio_alquiler = precio_alquiler;
}

}
