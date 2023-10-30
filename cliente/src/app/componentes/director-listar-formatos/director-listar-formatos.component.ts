import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-listar-formatos',
  templateUrl: './director-listar-formatos.component.html',
  styleUrls: ['./director-listar-formatos.component.css']
})
export class DirectorListarFormatosComponent {
  constructor(private router: Router){
    
  }
  irSubirFormato(){
    this.router.navigate(['/directorLlenarFormato']);
  }
}
