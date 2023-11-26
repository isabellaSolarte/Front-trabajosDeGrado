import { Component } from '@angular/core';
import { Credenciales } from '../modelo/Credenciales';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { Usuario } from '../modelo/usuario';
import {currentUser } from '../control-vista/currentUser';
import { rol } from '../modelo/rol';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creenciales:Credenciales = {
    _username: '',
    _clave: ''
  };
  usuario:Usuario ={
    _id:0,
    _nombre: '',
    _login: '',
    _password: '',
    _rol:[],
    _correo: ''
  };
  constructor(private router:Router,private services:UsuarioService){}
  login(){
    if(!this.creenciales._username  || !this.creenciales._clave ) {
      console.error('Las credenciales están vacías');
    }
    else{
      //llamar al service
      this.services.loginUsuario(this.creenciales).subscribe(
        (res: any) => {
          console.log(res);
          this.usuario = res;
          currentUser.setCurrentId(this.usuario._id);
          currentUser.setCurrentNombre(this.usuario._nombre);
          this.verificarVista(this.usuario._rol);
        },
        err => console.log(err)
      );
    }
  }
  verificarVista(rol:rol[]){
    currentUser.setCurrentRol(rol);
    console.log(rol[0]._id)
    if(rol[0]._id == 1){
      this.router.navigate(['/administrador']);
    }
    else{
      if (rol[0]._id == 2) {
        this.router.navigate(['/directorMain']);
      } else{
        this.router.navigate(['/jefaturaMain']);
      }
    }
  }
}

