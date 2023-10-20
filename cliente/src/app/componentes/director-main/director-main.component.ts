import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProcesoList } from '../modelo/ProcesoList';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-director-main',
  templateUrl: './director-main.component.html',
  styleUrls: ['./director-main.component.css']
})
export class DirectorMainComponent {
  procesos:ProcesoList[] = [];
  constructor(private router: Router,private services:AdministradorService){
    
  }
  ngOnInit(): void{
    this.getProcesos();
  }

  getProcesos(){ //listar procesos
    this.services.getProcesses().subscribe(
      (res: any) => {
        console.log(res);
        this.procesos = res;
      },
      err => console.log(err)
    );
  }
  irSubirFormato(){
    this.router.navigate(['/directorLlenarFormato']);
  }
  irVerFormatos(){
    this.router.navigate(['/directorListar']); ///directorListar
  }
}
