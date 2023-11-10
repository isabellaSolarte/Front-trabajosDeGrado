import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formato } from '../componentes/modelo/FormatoADirector';
import { Proceso } from '../componentes/modelo/Proceso';
@Injectable({
  providedIn: 'root'
})
export class JefaturaService {
  API_URI = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }
  getRevisiones(codigoJefatura:number){
    return this.http.get(`${this.API_URI}/revisiones/${codigoJefatura}`);
  }

}