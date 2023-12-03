import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { currentUser } from '../control-vista/currentUser';


import { CoordinadorService } from 'src/app/services/coordinador.service';
@Component({
  selector: 'app-coordinador-registros',
  templateUrl: './coordinador-registros.component.html',
  styleUrls: ['./coordinador-registros.component.css']
})
export class CoordinadorRegistrosComponent {

  constructor(private router: Router, private services:CoordinadorService,private http: HttpClient){}
  fileName:string = "";
  //RECIBE ID DEL ESTUDIANTE Y NOMBRE DEL ESTUDIANTE
  descargarFormatoA(id:number, nombre:string):void {
    this.services.getRuta(id,nombre);
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
      this.router.navigate(['coordinadorRegistro']);
    });
  }

  //TODO: recibe id de la revision
  //cambiar linea 32
  guardarComentarios(event: any) {
    const file = event.target.files[0];
    if (file) {

      const formData = new FormData();
      const idPrc = 1;
      formData.append('archivo', file, file.name);
      console.log('entro',formData.get('archivo'))
      this.fileName = file.name;
      this.services.enviarArchivo(formData,idPrc).subscribe(
        (res) => {
          console.log('Archivo enviado correctamente');
          // Realizar las acciones necesarias después de enviar el archivo
        },
        error => {
          console.error('Error al enviar el archivo:', error);
          // Manejar el error de manera adecuada
        }
      );
    }
  }
}
