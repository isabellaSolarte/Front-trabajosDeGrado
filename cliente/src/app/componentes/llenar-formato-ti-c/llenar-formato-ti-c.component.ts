import { Component } from '@angular/core';
import { JefaturaService } from 'src/app/services/jefatura.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormatoC } from '../modelo/FormatoC';

@Component({
  selector: 'app-llenar-formato-ti-c',
  templateUrl: './llenar-formato-ti-c.component.html',
  styleUrls: ['./llenar-formato-ti-c.component.css']
})
export class LlenarFormatoTICComponent {
  formato :FormatoC ={
    id: 0,
    desarrollo:'',
    estructura: 0, 
    con_comite: 0,
    con_depto: 0,
    recibido: '',
    observaciones: '',
    no_revisiones: 0,
    revision: ''
  }
  controlEnviar: boolean = false;
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'evaluadorRegistros';
  constructor(private route:Router,private services:JefaturaService,private router: ActivatedRoute){}
  crearFormatoC(){
    const params = this.router.snapshot.params;
    console.log(params['id']);
    console.log(this.formato);
    this.services.create(params['id'],this.formato).subscribe(
        res => {
          console.log(res);
          this.mensajeExito();
          this.controlEnviar = true;
        },
        err => {
          console.error(err);
          this.mensajeError();
        }
    );
  }
  actualizarFormato(clave: keyof FormatoC) {
    // Incrementa la propiedad correspondiente
    this.formato[clave]++;
  }
  iratras(){
    //todo
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No se pudo llenar el formato C'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha llenado el formato C exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }
}
