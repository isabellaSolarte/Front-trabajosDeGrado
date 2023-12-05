import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formato } from '../componentes/modelo/FormatoADirector';
import { Proceso } from '../componentes/modelo/Proceso';
import { currentUser } from '../componentes/control-vista/currentUser';
@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  saveFormatoA(form: Formato, id: number) {
    return this.http.post(`${this.API_URI}/formatoA/?id=${id}`, form);
  }
  getProcesses(idUser:number){
    return this.http.get(`${this.API_URI}/procesos/?usr=${idUser}`);
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


  enviarArchivo(formData: FormData, idUser:number) {

    console.log("antes de entrar al servidor"+ formData)
    return this.http.post(`${this.API_URI}/anteproyecto/upload/${idUser}`,formData);
  }
  getRuta(codUser: number): void {
    this.http.get(`${this.API_URI}/comentario/download/${codUser}`, { responseType: 'arraybuffer' }).subscribe(
        (response: any) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'AJUSTES_TI_A_'+'_'+codUser+'.pdf';
            link.click();
        },
        (error) => {
            console.error('Error al obtener la ruta del archivo:', error);
            // Puedes manejar el error según tus necesidades, como mostrar un mensaje al usuario
        }
    );
  }
  getFormatoB(codUser: number):void{
    this.http.get(`${this.API_URI}/formatos/b/download/?num=1&${codUser}`, { responseType: 'arraybuffer' }).subscribe(
      (response: any) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'TI_B1_'+'_'+codUser+'.pdf';
          link.click();



           // Obtener la ruta para el segundo archivo
           this.http.get(`${this.API_URI}/formatos/b/download/?num=2&${codUser}`, { responseType: 'arraybuffer' }).subscribe(
            (response2: any) => {
                // Crear Blob y descargar segundo archivo
                const blob2 = new Blob([response2], { type: 'application/pdf' });
                const link2 = document.createElement('a');
                link2.href = window.URL.createObjectURL(blob2);
                link.download = 'TI_B2_'+'_'+codUser+'.pdf';
                link2.click();
            },
            (error2) => {
                console.error('Error al obtener la ruta del segundo archivo:', error2);
            }
        );
      },
      (error) => {
          console.error('Error al obtener la ruta del archivo:', error);
          // Puedes manejar el error según tus necesidades, como mostrar un mensaje al usuario
      }
  );
  }

}
