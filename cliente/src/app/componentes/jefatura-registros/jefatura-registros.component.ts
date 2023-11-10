import { Component } from '@angular/core';
import { RevisionA } from '../modelo/RevisionA';
import { Router } from '@angular/router';
import { JefaturaService } from 'src/app/services/jefatura.service';


@Component({
  selector: 'app-jefatura-registros',
  templateUrl: './jefatura-registros.component.html',
  styleUrls: ['./jefatura-registros.component.css']
})
export class JefaturaRegistrosComponent {
  revisiones:RevisionA[]=[];
  estados: { [key: number]: string } = {
    1: 'Pendiente',
    2: 'En revisión'
  };
  constructor(private router: Router, private services:JefaturaService){}
  ngOnInit(): void {
    this.getRevisiones();
  }
  getRevisiones(){
    this.services.getRevisiones(1).subscribe(
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
  //getRevisiones
}
