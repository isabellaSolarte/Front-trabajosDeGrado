import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { rol } from '../modelo/rol';
import { AdministradorService } from 'src/app/services/administrador.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-administrador-crear',
  templateUrl: './administrador-crear.component.html',
  styleUrls: ['./administrador-crear.component.css']
})
export class AdministradorCrearComponent {
  roles:rol[] = [];
  selectedRoles: rol[] = [];
  usuario_id:string = '';
  usuario:Usuario ={
    _id:0,
    _nombre: '',
    _login: '',
    _password: '',
    _rol:[],
    _correo: ''
  };
  
  constructor(private router:Router,private services:AdministradorService){}
  mostrarMensaje: boolean = false;
  ngOnInit(): void {
    this.getRoles();
  }
  identificacionError: boolean = false;
  nombreError: boolean = false;
  usuarioError: boolean = false;
  rolError: boolean = false;

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
    if (this.selectedRoles.length > 0) {
      if (this.usuario) {
        this.usuario._rol = this.selectedRoles;
        this.usuario._id = parseInt(this.usuario_id);
        this.services.saveUser(this.usuario).subscribe(
          res => {
            console.log(res);
            // Mostrar el mensaje de confirmación
            this.mostrarMensaje = true;
          },
          err => console.error(err)
        );
      }
    } else {
      this.rolError = true;
      console.error('Debe seleccionar al menos una opción de rol.');
    }
  }
  

  validarIdentificacion() {
    const elemento = document.getElementById('identificacion');
  
    if (elemento) {
      const regex = /^[0-9]+$/;
  
      if (!regex.test(this.usuario_id)) {
        elemento.classList.add('campo-invalido');
        this.identificacionError = true;
        console.error('Error! La identificación debe contener solo dígitos numéricos.');
      } else {
        elemento.classList.remove('campo-invalido');
        this.identificacionError = false; // Establecer a false cuando no hay error
      }
    }
  }
  validarNombre() {
    const elemento = document.getElementById('nombres');
  
    if (elemento) {
      const regex = /^[a-zA-Z]+$/;
  
      if (!regex.test(this.usuario._nombre)) {
        elemento.classList.add('campo-invalido');
        this.nombreError = true;
        console.error('Error: El nombre debe contener solo caracteres no numéricos.');
      } else {
        elemento.classList.remove('campo-invalido');
        this.nombreError = false; // Establecer a false cuando no hay error
      }
    }
  }
  validarUsuario() {
    const elemento = document.getElementById('usuario');
  
    if (elemento) {
      const regex = /^[a-zA-Z]+$/;
  
      if (!regex.test(this.usuario._login)) {
        elemento.classList.add('campo-invalido');
        this.usuarioError = true;
        console.error('Error: El usuario debe contener solo caracteres no numéricos.');
      } else {
        elemento.classList.remove('campo-invalido');
        this.usuarioError = false; // Establecer a false cuando no hay error
      }
    }
  }
  cancelar(){
      this.router.navigate(['/administrador']);
  }
  cerrarMensaje() {
    this.mostrarMensaje= false;
    this.router.navigate(['/administrador']);
  }
 
}
