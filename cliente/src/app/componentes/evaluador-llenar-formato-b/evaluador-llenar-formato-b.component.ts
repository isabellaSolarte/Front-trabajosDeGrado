import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormatoB } from '../modelo/FormatoB';
import { EvaluadorService } from 'src/app/services/evaluador.service';
@Component({
  selector: 'app-evaluador-llenar-formato-b',
  templateUrl: './evaluador-llenar-formato-b.component.html',
  styleUrls: ['./evaluador-llenar-formato-b.component.css']
})
export class EvaluadorLlenarFormatoBComponent {
  formato: FormatoB={
    id: 0,
    aportes:0, 
    objetivos: 0, 
    metodologia: 0,
    entrega: 0,
    estructura: 0,
    cronograma: 0,
    patrocinio: 0,
    concepto: 0,
    recibido: '',
    observaciones: '',
    no_revisiones: 0,
    revision: ''
  };
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'evaluadorRegistros';
  constructor(private route:Router,private services:EvaluadorService,private router: ActivatedRoute){}
  
  iratras(){
    this.route.navigate(['/evaluadorRegistros']);
  }
  crearFormatoB(){
    const params = this.router.snapshot.params;
    console.log(params['id']);
    console.log(this.formato);
    this.services.create(params['id'],this.formato).subscribe(
        res => {
          console.log(res);
          this.mensajeExito();
        },
        err => {
          console.error(err);
          this.mensajeError();
        }
    );
  }
  actualizarFormato(clave: keyof FormatoB) {
    // Incrementa la propiedad correspondiente
    this.formato[clave]++;
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No se pudo llenar el formato B'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha llenado el formato B exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }
}