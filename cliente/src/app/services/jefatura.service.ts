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
  /*getRuta(codUser: number): void {
    this.http.get<any>(`${this.API_URI}/formatoA/download/${codUser}`, { responseType: 'text' as 'json' }).subscribe(
        (response: any) => {
            const ruta: string = response.ruta; // Ajusta según la estructura real de la respuesta
            console.log(response);
            window.open(ruta, '_blank');
        },
        (error) => {
            console.error('Error al obtener la ruta del archivo:', error);
            // Puedes manejar el error según tus necesidades, como mostrar un mensaje al usuario
        }
    );
}*/
getRuta(codUser: number,nombre:string): void {

  this.http.get(`${this.API_URI}/formatoA/download/${codUser}`, { responseType: 'arraybuffer' }).subscribe(
      (response: any) => {
          const blob = new Blob([response], { type: 'application/pdf' });
         // const url = window.URL.createObjectURL(blob);
          //window.open(url, '_blank');
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

  getCambiarEstado(cod:number){
    return this.http.get(`${this.API_URI}/revisiones/state/${cod}`);
  }

}
