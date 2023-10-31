import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProcesoList } from '../modelo/ProcesoList';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director-main',
  templateUrl: './director-main.component.html',
  styleUrls: ['./director-main.component.css']
})
export class DirectorMainComponent {
  procesos:ProcesoList[] = [];
  constructor(private router: Router,private services:DirectorService){
    
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
  irVerFormatos(id:number){
    this.router.navigate(['/directorListar',id]); ///directorListar
  }
}
