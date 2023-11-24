import { currentUser } from '../control-vista/currentUser';
import { HttpClient } from '@angular/common/http';
import { DirectorService } from 'src/app/services/director.service';
import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-director-anteproyecto',
  templateUrl: './director-anteproyecto.component.html',
  styleUrls: ['./director-anteproyecto.component.css']
})
export class DirectorAnteproyectoComponent {
  constructor(private router: Router,private services:DirectorService,private route: ActivatedRoute){}

  fileName:string = "";
  guardarArchivo(event: any) {
    const file = event.target.files[0];
    if (file) {

      const formData = new FormData();
      //const idUser=104619021330;
      const idUser = currentUser.getCurrentId();
      formData.append('archivo', file, file.name);
      console.log('entro',formData.get('archivo'))
      this.fileName = file.name;
      this.services.enviarArchivo(formData,idUser).subscribe(
        (res) => {
          console.log('Archivo enviado correctamente');
          // Realizar las acciones necesarias después de enviar el archivo
        },
        error => {
          console.error('Error al enviar el archivo:', error);
          // Manejar el error de manera adecuada
        }
      );
    }
  }


}
