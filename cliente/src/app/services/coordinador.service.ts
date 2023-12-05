import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {
  API_URI = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }

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
        }
    );
  }
  enviarArchivo(formData: FormData, idProceso:number) {
    return this.http.post(`${this.API_URI}/comentario/upload/${idProceso}`,formData);
  }
  getRevisiones(codigoCoordinador:number){
    return this.http.get(`${this.API_URI}/consejo/formato/a/${codigoCoordinador}`);
  }
  getCambiarEstado(cod:number){
    return this.http.patch(`${this.API_URI}/revisiones/state/${cod}`,cod);
  }

}
