import { Component, Input } from '@angular/core';

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
  closeModal() {
    this.showModal = false;
  }
}
