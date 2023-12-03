import { rol } from "../modelo/rol";
export class CurrentUser{
    constructor(private id:number,private rol:rol[], private nombre:string){}

    public setCurrentRol(rol:rol[])
    {
        this.rol = rol;
    }
    public getCurrentRol()
    {
        return this.rol;
    }
    public setCurrentId(id:number)
    {
        this.id = id;
    }
    public getCurrentId()
    {
        return this.id;
    }
    public setCurrentNombre(nombre:string)
    {
        this.nombre = nombre;
    }
    public getCurrentNombre()
    {
        return this.nombre;
    }

}
export const currentUser = new CurrentUser(0,[],'');