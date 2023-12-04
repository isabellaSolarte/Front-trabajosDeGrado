import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RevisionA } from '../modelo/RevisionA';
import { CoordinadorService } from 'src/app/services/coordinador.service';
import { currentUser } from '../control-vista/currentUser';

@Component({
  selector: 'app-coordinador-registros',
  templateUrl: './coordinador-registros.component.html',
  styleUrls: ['./coordinador-registros.component.css']
})
export class CoordinadorRegistrosComponent {
  revisiones:RevisionA[]=[];
  estados: { [key: number]: string } = {
    1: 'Pendiente',
    2: 'En revisión',
    3: 'Aprobado'
  };
  constructor(private router: Router,private services:CoordinadorService){}
  ngOnInit(): void {
    this.getRevisiones();
  }
  getRevisiones(){
    //this.services.getRevisiones().subscribe(
    this.services.getRevisiones(currentUser.getCurrentId()).subscribe(
      (res: any) => {
        console.log(res);
        this.revisiones = res;
      },
      err => console.log(err)
    );
  }
  getEstado(state:number){
    return this.estados[state];
  }

  fileName:string = "";
  //RECIBE ID DEL ESTUDIANTE Y NOMBRE DEL ESTUDIANTE
  descargarFormatoA(id:number, nombre:string):void {
    this.services.getRuta(id,nombre);
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
      this.router.navigate(['coordinadorRegistro']);
    });
  }
  irComentarios(idRevision:number){
    this.router.navigate(['/coordinadorComentarios',idRevision]);
  }

  //TODO: recibe id de la revision
  //cambiar linea 53
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
  getColorByEstado(estado: number): string {
    switch (estado) {
      case 1:
        return 'orange';
      case 2:
        return 'blue';
      case 3:
        return 'green';
      default:
        return '';
    }
  }
}
