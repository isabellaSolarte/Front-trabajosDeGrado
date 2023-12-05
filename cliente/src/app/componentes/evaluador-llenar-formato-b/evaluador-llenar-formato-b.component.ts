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
          // Mostrar el mensaje de confirmación
        },
        err => {
          console.error(err);
        }
    );
  }
  actualizarFormato(clave: keyof FormatoB) {
    // Incrementa la propiedad correspondiente
    this.formato[clave]++;
  }
}
