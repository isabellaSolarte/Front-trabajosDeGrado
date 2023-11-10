import { EstudianteBasico } from "./EstudianteBasico";
export interface RevisionA
{
    id:number;
    titulo:string;
    tipo:string;
    estudiantes:EstudianteBasico[];
    estado:number;
    no_revision:number;
}
