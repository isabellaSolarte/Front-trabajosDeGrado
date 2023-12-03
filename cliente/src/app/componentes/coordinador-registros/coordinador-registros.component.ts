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
}
