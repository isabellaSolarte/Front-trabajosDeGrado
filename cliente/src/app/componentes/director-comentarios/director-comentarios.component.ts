import { Component } from '@angular/core';
import {  OnInit} from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director-comentarios',
  templateUrl: './director-comentarios.component.html',
  styleUrls: ['./director-comentarios.component.css']
})
export class DirectorComentariosComponent {
  constructor(private router: Router,private services:DirectorService,private route: ActivatedRoute){}
  //RECIBE ID DEL ESTUDIANTE Y NOMBRE DEL ESTUDIANTE

  descargarComentario(id:number, nombre:string):void {
    this.services.getRuta(id,nombre);
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
      this.router.navigate(['directorComentario']);
    });
  }
}
