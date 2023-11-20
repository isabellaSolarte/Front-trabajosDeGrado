import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { rol } from '../modelo/rol';
import { AdministradorService } from 'src/app/services/administrador.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-administrador-crear',
  templateUrl: './administrador-crear.component.html',
  styleUrls: ['./administrador-crear.component.css']
})
export class AdministradorCrearComponent {
  roles:rol[] = [];
  selectedRoles: rol[] = [];
  usuario_id:string = '';
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = ''
  usuario:Usuario ={
    _id:0,
    _nombre: '',
    _login: '',
    _password: '',
    _rol:[],
    _correo: ''
  };
  
  constructor(private router:Router,private services:AdministradorService){}
  
  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    this.services.getRoles().subscribe(
      (res: any) => {
        console.log(res);
        this.roles = res;
      },
      err => console.log(err)
    );
  }
  toggleRoleSelection(role: rol) {
    const index = this.selectedRoles.findIndex(selectedRole => selectedRole._id === role._id);
    if (index === -1) {
      // Agregar el rol si no está en la lista de roles seleccionados
      this.selectedRoles.push(role);
    } else {
      // Eliminar el rol si ya está en la lista de roles seleccionados
      this.selectedRoles.splice(index, 1);
    }
  }
  guardarUsuario() {
    if (this.usuario) {
      this.usuario._rol = this.selectedRoles;
      this.usuario._id = parseInt(this.usuario_id);
      this.services.saveUser(this.usuario).subscribe(
        res => {
          console.log(res);
          // Mostrar el mensaje de confirmación
          this.mensajeExito();
        },
        err => {
          console.error(err);
          this.mensajeError();
        }
      );
     
    }
  }
  cancelar(){
    this.router.navigate(['/administrador']);
  }
  mostrarModal(){
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.router.navigate(['/administrador']);
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No es posible crear el usuario'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha creado el usuario exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }

 
}
