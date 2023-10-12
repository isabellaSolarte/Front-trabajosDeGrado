import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import{Usuario} from '../componentes/modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }
  getUser(id:number){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  saveUser(usuario: Usuario) {
    console.log(usuario._nombre);
    return this.http.post(`${this.API_URI}/usuarios/`, usuario);
  }
  updateUser(id: number, updatedUsuario: Usuario) {
    console.log(updatedUsuario);
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUsuario);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }
}