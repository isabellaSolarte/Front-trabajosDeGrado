import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Credenciales } from '../componentes/modelo/Credenciales';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService{
    API_URI = "http://localhost:3000/api";
    constructor(private http:HttpClient) { }

    loginUsuario(credenciales: Credenciales){
        return this.http.post(`${this.API_URI}/usuarios/verify/`,credenciales);
    }
}