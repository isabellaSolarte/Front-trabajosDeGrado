import { currentUser } from '../control-vista/currentUser';
import { HttpClient } from '@angular/common/http';
import { DirectorService } from 'src/app/services/director.service';
import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-director-anteproyecto',
  templateUrl: './director-anteproyecto.component.html',
  styleUrls: ['./director-anteproyecto.component.css']
})
export class DirectorAnteproyectoComponent {
  constructor(private router: Router,private services:DirectorService,private route: ActivatedRoute){}

  fileName:string = "";
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'directorMain';
  guardarArchivo(event: any) {
    const file = event.target.files[0];
    if (file) {
      const params = this.route.snapshot.params;
      console.log(params['id']);
      const formData = new FormData();
      formData.append('archivo', file, file.name);
      console.log('entro',formData.get('archivo'))
      this.fileName = file.name;
      this.services.enviarArchivo(formData,params['id']).subscribe(//en lugar de usuario, el proceso
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
  cancelar(){
    this.router.navigate(['directorMain']);
  }
  subirArchivo(){
    this.mensajeExito();
  }
  mostrarModal(){
    this.showModal = true;
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No se pudo subir el archivo'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha subido el archivo exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }


}
