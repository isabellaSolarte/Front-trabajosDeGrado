import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormatoB } from '../componentes/modelo/FormatoB';
import { currentUser } from '../componentes/control-vista/currentUser';
@Injectable({
    providedIn: 'root'
  })
export class EvaluadorService{
  API_URI = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }
  getRegistroEvaluador(codigoEvaluador:number){
    return this.http.get(`${this.API_URI}/evaluadores/listAnteproyecto/${codigoEvaluador}`);
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
  create(prcId:number, formatoB:FormatoB)
  {
    return this.http.post(`${this.API_URI}/formatos/b/?id=${prcId}&usr=${currentUser.getCurrentId()}`,formatoB);
  }
  update(prcId:number, formatoB:FormatoB)
  {
    return this.http.put(`${this.API_URI}/formatos/b/?id=${prcId}&usr=${currentUser.getCurrentId()}`,formatoB);
  }
  delete(prcId:number)
  {
    return this.http.delete(`${this.API_URI}/formatos/b/?id=${prcId}&usr=${currentUser.getCurrentId()}`);
  }
  getOne(prcId:number)
  {
    return this.http.delete(`${this.API_URI}/formatos/b/?id=${prcId}&usr=${currentUser.getCurrentId()}`);
  }
  //TODO:Luchis las papas
} 