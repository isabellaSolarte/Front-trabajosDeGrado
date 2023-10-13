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
  

  /*obtenerId(): number {
    return this.usuario._id;
  }*/

  mostrarMensaje: boolean = false;


  updateUsuario(): void {
    //if (this.usuario) {
      console.log(this.usuario);
      // Asignar los roles
      this.usuario._rol = this.selectedRoles;
      console.log(this.roles);
      
      this.services.updateUser(this.usuario._id, this.usuario).subscribe(
        res => {
          console.log(res);
          // Mostrar un mensaje de confirmación
          this.mostrarMensaje = true;
          // Redirigir al usuario a la lista de usuarios u otra página
          //this.router.navigate(['/administrador']);
        },
        err => console.error(err)
      );
      this.mostrarMensaje=true;
    //}
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
  
  

  cerrarModal() {
    
    this.router.navigate(['/administrador']);

  }
  isDisabled: boolean = true;
}