import { Component } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  usuarios:Usuario[] = [];
  constructor(private services:AdministradorService,private router: Router){

  }
  //cuando recargue la página liste
  ngOnInit(): void { 
    this.getUsuarios();
  }
  getUsuarios(){ //listar usuarios
    this.services.getUsers().subscribe(
      (res: any) => {
        console.log(res); 
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }
}