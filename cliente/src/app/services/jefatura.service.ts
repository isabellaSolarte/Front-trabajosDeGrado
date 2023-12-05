import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formato } from '../componentes/modelo/FormatoADirector';
import { Proceso } from '../componentes/modelo/Proceso';
import { Evaluador } from '../componentes/modelo/Evaluador';
import { FormatoC } from '../componentes/modelo/FormatoC';
import { currentUser } from '../componentes/control-vista/currentUser';
@Injectable({
  providedIn: 'root'
})
export class JefaturaService {
  API_URI = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }
  getRevisiones(codigoJefatura:number){
    return this.http.get(`${this.API_URI}/revisiones/${codigoJefatura}`);
  }
  getRuta(codUser: number,nombre:string): void {
    this.http.get(`${this.API_URI}/formatoA/download/${codUser}`, { responseType: 'arraybuffer' }).subscribe(
        (response: any) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'TI_A_'+nombre+'_'+codUser+'.pdf';
            link.click();
        },
        (error) => {
            console.error('Error al obtener la ruta del archivo:', error);
            // Puedes manejar el error según tus necesidades, como mostrar un mensaje al usuario
        }
    );
  }

  getRutaAnteproyecto(codUser: number,nombre:string): void {
    this.http.get(`${this.API_URI}/anteproyecto/download/${codUser}`, { responseType: 'arraybuffer' }).subscribe(
        (response: any) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'ANTEPROYECTO_'+nombre+'_'+codUser+'.pdf';
            link.click();
        },
        (error) => {
            console.error('Error al obtener la ruta del archivo:', error);
            // Puedes manejar el error según tus necesidades, como mostrar un mensaje al usuario
        }
    );
  }

  getCambiarEstado(cod:number){
    return this.http.patch(`${this.API_URI}/revisiones/state/${cod}`,{});
  }
  getEvaluadores(){
    return this.http.get(`${this.API_URI}/evaluadores`);
  }
  asignarEvaluadores(id: number,evaluador:Evaluador[]) {
    return this.http.post(`${this.API_URI}/evaluadores/?id=${id}`,evaluador);
  }
  getProcesosB(){
    return this.http.get(`${this.API_URI}/procesos/listB/`);
  }
  create(prcId:number, formatoC:FormatoC)
  {
    return this.http.post(`${this.API_URI}/formatos/c/?id=${prcId}&usr=${currentUser.getCurrentId()}`,formatoC);
  }


}
