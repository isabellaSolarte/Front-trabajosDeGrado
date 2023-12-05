import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormatoB } from '../modelo/FormatoB';

@Component({
  selector: 'app-evaluador-llenar-formato-b',
  templateUrl: './evaluador-llenar-formato-b.component.html',
  styleUrls: ['./evaluador-llenar-formato-b.component.css']
})
export class EvaluadorLlenarFormatoBComponent {
  formato: FormatoB={
    _id: 0,
    _aportes:0, 
    _objetivos: 0, 
    _metodologia: 0,
   _entrega: 0,
    _estructura: 0,
    _cronograma: 0,
    _patrocinio: 0,
    _concepto: 0,
    _recibido: '',
    _observaciones: '',
    _no_revisiones: 0,
    _revision: ''
  };
  constructor(private route:Router){}
  
  iratras(){
    this.route.navigate(['/evaluadorRegistros']);
  }
  crearFormatoB(){
    /*console.log(this.formato);
    this.services.saveFormatoA(this.formato).subscribe(
        res => {
          console.log(res);
          // Mostrar el mensaje de confirmación
          this.mensajeExito();
        },
        err => {
          console.error(err);
          this.mensajeError();
        }
    );*/
  }
  actualizarFormato(clave: keyof FormatoB) {
    // Incrementa la propiedad correspondiente
    this.formato[clave]++;
  }
}
