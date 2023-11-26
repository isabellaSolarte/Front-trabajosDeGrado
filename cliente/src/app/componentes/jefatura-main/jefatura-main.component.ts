import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { currentUser } from '../control-vista/currentUser';

@Component({
  selector: 'app-jefatura-main',
  templateUrl: './jefatura-main.component.html',
  styleUrls: ['./jefatura-main.component.css']
})
export class JefaturaMainComponent {
    showModal: boolean = true;
    modalTitle: string = 'Título del Modal';
    modalMessage: string = 'Mensaje del Modal';
    usuario :string = '';
  constructor(private router:Router) {}
  ngOnInit(){
    this.usuario = currentUser.getCurrentNombre();
  }
  irEvaluadores(){
    this.router.navigate(['evaluadores']);
  }
  irRegistros(){
    this.router.navigate(['jefaturaRegistro']);
  }
  

}
