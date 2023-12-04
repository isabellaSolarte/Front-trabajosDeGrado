import { Component } from '@angular/core';
import { Evaluador } from '../modelo/Evaluador';
import { Router,ActivatedRoute} from '@angular/router';
import { JefaturaService } from 'src/app/services/jefatura.service';

@Component({
  selector: 'app-evaluadores',
  templateUrl: './evaluadores.component.html',
  styleUrls: ['./evaluadores.component.css']
})
export class EvaluadoresComponent {
  evaluadores:Evaluador[] = [];
  selectedevaluadores: Evaluador[] = [];
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'jefaturaRegistro';
  constructor(private route: Router, private services:JefaturaService,private router: ActivatedRoute){}
  ngOnInit(){
    this.getEvaluadores();
  }
  getEvaluadores(){
    this.services.getEvaluadores().subscribe(
      (res: any) => {
        console.log(res);
        this.evaluadores = res;
      },
      err => console.log(err)
    );
  }
  //TODO llamar servicio de evaluadores y agregar botón de asignarlos
  toggleEvaluadorSelection(eva:Evaluador){
    const index = this.selectedevaluadores.findIndex(selectedEva => selectedEva.codigo === eva.codigo);
    if (index === -1) {
      // Agregar el rol si no está en la lista de roles seleccionados
      this.selectedevaluadores.push(eva);
    } else {
      // Eliminar el rol si ya está en la lista de roles seleccionados
      this.selectedevaluadores.splice(index, 1);
    }
  }
  asignarEvaluadores(){
    const params = this.router.snapshot.params;
    console.log(params['id']);
    console.log(this.selectedevaluadores);
      if (params && this.selectedevaluadores.length>=2) {
        this.services.asignarEvaluadores(params['id'],this.selectedevaluadores).subscribe(
          (res: any) => {
            console.log(res);
            this.mensajeExito();
          },
          err => {
            console.log(err);
            this.mensajeError();
          }
        );
      }else{
        this.mensajeError();
      }
  }
  iratras(){
    this.route.navigate(['jefaturaAnteproyecto']);
  }
  mostrarModal(){
    this.showModal = true;
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No es posible asignar los evaluadores'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se han asignado los evaluadores exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }
}
