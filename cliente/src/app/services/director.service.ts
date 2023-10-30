import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formato } from '../componentes/modelo/FormatoADirector';
import { Proceso } from '../componentes/modelo/Proceso';
@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  saveFormatoA(form: Formato, id: number) {
    //return this.http.post(`${this.API_URI}/formatoA/?id=${id}`, form);
  }
  getProcesses(){
    return this.http.get(`${this.API_URI}/procesos/`);
  }
  getFormatos(id: number){
    return this.http.get(`${this.API_URI}/procesos/${id}`);
  }
  createProceso(proceso:Proceso){
    return this.http.post(`${this.API_URI}/procesos`,proceso);
  }

}
