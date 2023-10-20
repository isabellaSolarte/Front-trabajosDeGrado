import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProcesoList } from '../modelo/ProcesoList';

@Component({
  selector: 'app-director-main',
  templateUrl: './director-main.component.html',
  styleUrls: ['./director-main.component.css']
})
export class DirectorMainComponent {
  procesos:ProcesoList[] = [];
  constructor(private router: Router){
    
  }
  ngOnInit(): void{
    this.getProcesos();
  }

  getProcesos(){ //listar procesos
    
  }
  irSubirFormato(){
    this.router.navigate(['/directorLlenarFormato']);
  }
}
