import { rol } from "../modelo/rol";
export class CurrentUser{
    constructor(private id:number,private rol:rol[]){}

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

}
export const currentUser = new CurrentUser(0,[]);