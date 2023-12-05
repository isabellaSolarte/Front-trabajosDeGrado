import { Component } from '@angular/core';
import { RevisionA } from '../modelo/RevisionA';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JefaturaService } from 'src/app/services/jefatura.service';
import { currentUser } from '../control-vista/currentUser';
@Component({
  selector: 'app-jefatura-anteproyecto',
  templateUrl: './jefatura-anteproyecto.component.html',
  styleUrls: ['./jefatura-anteproyecto.component.css']
})
export class JefaturaAnteproyectoComponent {
  revisiones:RevisionA[]=[];
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'jefaturaRegistro';
  estados: { [key: number]: string } = {
    1: 'Pendiente',
    2: 'En revisión',
    3: 'Aprobado'
  };
  constructor(private router: Router, private services:JefaturaService,private http: HttpClient){}
  ngOnInit(): void {
    this.getRevisiones();
  }
  getRevisiones(){
    //this.services.getRevisiones(currentUser.getCurrentId()).subscribe(
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
  irEvaluadores(idProceso:number){
    this.router.navigate(['/evaluadores',idProceso]); ///directorListar
  }
  descargarAnteproyecto(id:number, nombre:string){
    this.services.getRutaAnteproyecto(id,nombre);
      this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
        this.router.navigate(['jefaturaAnteproyecto']);
      });
  }
  irRegistros(){
    this.router.navigate(['jefaturaRegistro']);
  }
  iratras(){
    this.router.navigate(['jefaturaMain']);
  }
  mostrarModal(){
    this.showModal = true;
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No es posible enviar el formato'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha enviado el formato exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }
}
