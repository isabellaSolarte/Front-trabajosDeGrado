import { Component } from '@angular/core';
import { CoordinadorService } from 'src/app/services/coordinador.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coordinador-comentarios',
  templateUrl: './coordinador-comentarios.component.html',
  styleUrls: ['./coordinador-comentarios.component.css']
})
export class CoordinadorComentariosComponent {

  fileName:string = "";
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'coordinadorRegistro';
  constructor(private router: Router,private services:CoordinadorService,private route: ActivatedRoute){}
  //TODO: recibe id de la revision
  //cambiar linea 53
  guardarComentarios(event: any) {
    const params = this.route.snapshot.params;
    console.log(params['id']);
    const file = event.target.files[0];
    if (file) {

      const formData = new FormData();
      formData.append('archivo', file, file.name);
      console.log('entro',formData.get('archivo'))
      this.fileName = file.name;
      this.services.enviarArchivo(formData,params['id']).subscribe(
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
    this.router.navigate(['/coordinadorRegistro']);
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
