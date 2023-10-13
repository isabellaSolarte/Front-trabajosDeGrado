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
    usuario:Usuario ={
    _id:0,
    _nombre: '',
    _login: '',
    _password: '',
    _rol:[],
    _correo: ''
  };
  constructor(private router:Router,private activeRouter: ActivatedRoute,private services:AdministradorService){
    this.roles = [
      { _id: 1, _nombre: 'Director' },
    ];
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
    }
  

  /*obtenerId(): number {
    return this.usuario._id;
  }*/

  mostrarMensaje: boolean = false;


  updateUsuario(): void {
    //if (this.usuario) {
      console.log(this.usuario);
      // Asignar los roles
      this.usuario._rol = this.roles;
      console.log(this.roles);
      
      this.services.updateUser(this.usuario._id, this.usuario).subscribe(
        res => {
          console.log(res);
          // Mostrar un mensaje de confirmación
          this.mostrarMensaje = true;
          // Redirigir al usuario a la lista de usuarios u otra página
          this.router.navigate(['/administrador']);
        },
        err => console.error(err)
      );
    //}
  }

  cerrarModal() {
    this.mostrarMensaje = false;
    this.router.navigate(['/administrador']);

  }

}