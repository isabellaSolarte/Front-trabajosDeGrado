import { rol } from "./rol";

export interface Usuario {
    _id: number;
    _nombre: string;
    _login: string;
    _password: string;
    _rol:rol[];
    _correo: string;
  }