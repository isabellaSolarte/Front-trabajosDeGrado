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
    return this.http.post(`${this.API_URI}/formatoA/?id=${id}`, form);
  }
  getProcesses(){
    return this.http.get(`${this.API_URI}/procesos/`);
  }
  getFormato(id: number){
    return this.http.get(`${this.API_URI}/formatoA/${id}`);
  }
  createProceso(proceso:Proceso){
    return this.http.post(`${this.API_URI}/procesos`,proceso);
  }
  getFormatosId(id:number){
    return this.http.get(`${this.API_URI}/procesos/${id}`);
  }
  getEstudiante(id:number){
    return this.http.get(`${this.API_URI}/estudiantes/${id}`);
  }
  getEstudiantes(){
    return this.http.get(`${this.API_URI}/estudiantes`);
  }
  sendFormato(id: number,idPrc:number) {
    return this.http.patch(`${this.API_URI}/procesos/formatosa/${id}/${idPrc}`, {id,idPrc});
  }
}
