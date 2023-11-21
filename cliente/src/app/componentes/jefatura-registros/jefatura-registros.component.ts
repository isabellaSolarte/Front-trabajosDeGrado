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
    2: 'En revisión'
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
  descargarFormatoA(id:number){
    //
    this.services.getRuta(id).subscribe(
      (res: any) => {
        console.log(res);
        const ruta = res;
      //  this.descargarArchivo(ruta);
       const link = document.createElement('a');
        link.href = ruta;
        link.download = '2023.001_1.pdf'; // Puedes ajustar el nombre del archivo según tus necesidades
        link.click();
      },
      err => console.log(err)
    );
    return 1;
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
