import { Component } from '@angular/core';
import { RevisionA } from '../modelo/RevisionA';
import { Router } from '@angular/router';
import { JefaturaService } from 'src/app/services/jefatura.service';
import { currentUser } from '../control-vista/currentUser';
import { HttpClient } from '@angular/common/http';

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
  ruta:string="";
  constructor(private router: Router, private services:JefaturaService,private http: HttpClient){}
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
  descargarFormatoA(id:number):void {
    //
    this.services.getRuta(id);
  }
  /*descargarArchivo(r:string){
    const url = `http://localhost:3000/api/formatoA/download/2023.001`;

    const link = document.createElement('a');
    link.href = url;

    link.download = '2023.001_1.pdf';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }*/

}
