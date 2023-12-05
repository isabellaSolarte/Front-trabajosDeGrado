import { Component } from '@angular/core';
import { EvaluadorService } from 'src/app/services/evaluador.service';
import { Router } from '@angular/router';
import { currentUser } from '../control-vista/currentUser';
import { RevisionA } from '../modelo/RevisionA';

@Component({
  selector: 'app-evaluador-registros',
  templateUrl: './evaluador-registros.component.html',
  styleUrls: ['./evaluador-registros.component.css']
})
export class EvaluadorRegistrosComponent {
  revisiones:RevisionA[]=[];
  estados: { [key: number]: string } = {
    1: 'Pendiente',
    2: 'En revisión',
    3: 'Aprobado'
  };
  constructor(private router:Router, private services:EvaluadorService){}
  ngOnInit(){
    this.getRegistrosEvaluador();
  }
  getRegistrosEvaluador(){
    //this.services.getRegistroEvaluador(currentUser.getCurrentId()).subscribe(
    this.services.getRegistroEvaluador(currentUser.getCurrentId()).subscribe(
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
  descargarAnteproyecto(id:number, nombre:string){
    this.services.getRutaAnteproyecto(id,nombre);
      this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
        this.router.navigate(['evaluadorRegistros']);
      });
  }
  irLlenarFormatoB(id:number){
    this.router.navigate(['/evaluadorLlenarFormatoB',id]);
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
  cerrarsesion(){
    this.router.navigate(['/login']);
  }
} 
