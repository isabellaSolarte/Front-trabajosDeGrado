import { Component } from '@angular/core';
import { RevisionA } from '../modelo/RevisionA';
import { Router } from '@angular/router';
import { JefaturaService } from 'src/app/services/jefatura.service';
import { currentUser } from '../control-vista/currentUser';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../control-vista/currentUser';

@Component({
  selector: 'app-jefatura-registros',
  templateUrl: './jefatura-registros.component.html',
  styleUrls: ['./jefatura-registros.component.css']
})
export class JefaturaRegistrosComponent {
  revisiones:RevisionA[]=[];
  estados: { [key: number]: string } = {
    1: 'Pendiente',
    2: 'En revisión',
    3: 'Aprobado'
  };
  ruta:string="";
  constructor(private router: Router, private services:JefaturaService,private http: HttpClient){}
  ngOnInit(): void {
    this.getRevisiones();
  }
  getRevisiones(){
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
  descargarFormatoA(id:number, nombre:string):void {
    this.services.getRuta(id,nombre);
    this.cambiarEstado(id);
  }
  aprobarFormato(){
   
  }
  cambiarEstado(idEstudiante:number){
    this.services.getCambiarEstado(idEstudiante).subscribe(
      (res: any) => {
        console.log(res);
        this.revisiones = res;
      },
      err => console.log(err)
    );
  }

}
