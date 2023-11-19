import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { rol } from '../modelo/rol';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administrador-editar',
  templateUrl: './administrador-editar.component.html',
  styleUrls: ['./administrador-editar.component.css']
})
export class AdministradorEditarComponent {
  roles:rol[] = [];
  selectedRoles: rol[] = [];
    usuario:Usuario ={
    _id:0,
    _nombre: '',
    _login: '',
    _password: '',
    _rol:[],
    _correo: ''
  };
  constructor(private router:Router,private activeRouter: ActivatedRoute,private services:AdministradorService){
    this.getRoles();
    
  }
  edit: boolean = false;
  identificacionError: boolean = false;
  nombreError: boolean = false;
  usuarioError: boolean = false;
  rolError: boolean = false;

  ngOnInit(): void {
    const params = this.activeRouter.snapshot.params;
      if (params['id']) {
        this.services.getUser(params['id']).subscribe(
          (res) => {
            console.log(res);
             Object.assign(this.usuario,res) ;
          },
          (err) => {
            console.error(err);
           
          }
        );
      }
      this.selectedRoles = this.usuario._rol;
    }
  mostrarMensaje: boolean = false;
  updateUsuario(): void {
    if (this.selectedRoles.length > 0) {
      console.log(this.usuario);
      // Asignar los roles
      this.usuario._rol = this.selectedRoles;
      console.log(this.roles);
      this.services.updateUser(this.usuario._id, this.usuario).subscribe(
        res => {
          console.log(res);
          // Mostrar un mensaje de confirmación
          this.mostrarMensaje = true;
        },
        err => console.error(err)
      );
      this.mostrarMensaje=true;
    }else {
      this.rolError = true;
      console.error('Debe seleccionar al menos una opción de rol.');
    }
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
      // Si el rol no está seleccionado, agrégalo
      this.selectedRoles.push(role);
    } else {
      // Si el rol ya está seleccionado, deselíminalo
      this.selectedRoles.splice(index, 1);
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
  

  cerrarModal() {
    this.mostrarMensaje=false;
    this.router.navigate(['/administrador']);

  }
  isDisabled: boolean = true;
}