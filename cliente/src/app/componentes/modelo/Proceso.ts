export interface Proceso{
    id:number,
    usuario: number,//Director de la tesis
    fa:number,//Llave del formato A
    fb:number,//Llave del formato B
    fc:number,//Llave del formato C
    ase:string,// Asesor(opcional)
    status_a:number,//Redundancia del estado del formato A
    status_b:number,//Redundancia del estado del formato B
    status_c:number,// Redundancia del estado del formato C
    titulo:string, // Titulo del proyecto
    tipo:string, // Trabajo de Investigación o Práctica Profesional
    estudiantes:number[] // Codigo estudiantes
}