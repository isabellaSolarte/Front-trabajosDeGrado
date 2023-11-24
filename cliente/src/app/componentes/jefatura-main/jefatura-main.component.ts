import { Component } from '@angular/core';

@Component({
  selector: 'app-jefatura-main',
  templateUrl: './jefatura-main.component.html',
  styleUrls: ['./jefatura-main.component.css']
})
export class JefaturaMainComponent {
    showModal: boolean = true;
    modalTitle: string = 'Título del Modal';
    modalMessage: string = 'Mensaje del Modal';
  constructor() {
    
  }
  

}
