import { currentUser } from "../control-vista/currentUser";
import roles from "./informacion";
export class Acceso
{
    public nombre:string = "";
    public ruta:string = "";

    constructor(id:number){
        const info = roles[id-1]
        this.nombre = info.nombre ?? "";
        this.ruta = info.ruta ?? "";
    }
}