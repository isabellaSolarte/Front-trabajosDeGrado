import { Component } from '@angular/core';
import { ProcesoList } from '../modelo/ProcesoList';
import { Router } from '@angular/router';
import { JefaturaService } from 'src/app/services/jefatura.service';

@Component({
  selector: 'app-jefatura-procesos',
  templateUrl: './jefatura-procesos.component.html',
  styleUrls: ['./jefatura-procesos.component.css']
})
export class JefaturaProcesosComponent {
  procesos:ProcesoList[] = [];
  constructor(private router: Router,private services:JefaturaService){
    
  }
  ngOnInit(): void{
    this.getProcesos();
  }
  getProcesos(){ //listar procesos
   this.services.getProcesosB().subscribe(
      (res: any) => {
        console.log(res);
        this.procesos = res;
      },
      err => console.log(err)
    );
  }
  irLlenarFormato(idProceso:number){
    this.router.navigate(['/llenaFormatoC',idProceso]);
  }
  iratras(){
    this.router.navigate(['jefaturaMain']);
  }
}
