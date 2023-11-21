import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Input() modalTitle: string = '';
  @Input() modalMessage: string = '';
  @Input() modalImagen: string = '';
  @Input() navegacion: string = '';
  constructor(private router:Router){}
  closeModal(navegacion:string) {
    this.showModal = false;
    this.router.navigate([navegacion]);
  }
}
