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
  passwordVisibility: boolean[] = [];

  constructor(private services:AdministradorService,private router: Router){
    this.usuarios.forEach(() => this.passwordVisibility.push(false));
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
  togglePassword(index: number) {
    this.passwordVisibility[index] = !this.passwordVisibility[index];
  }
  crearUsuario(){
    this.router.navigate(['/crearUsuario']);
  }
  ////////////////////////////////////
  //eliminar
  mostrar: boolean = false;
  deleteUsuario(id: number) {
    this.services.deleteUser(id).subscribe(
      () => {
        this.mostrar = true;
        console.log("Usuario eliminado exitosamente");
        this.getUsuarios(); // Vuelve a cargar los usuarios después de eliminar uno

      },
      err => console.error(err)
    );
  }
  confirmarEliminarUsuario(id: number) {
    const confirmacion = window.confirm('¿Está seguro de que desea eliminar este usuario?');
    if (confirmacion) {
      this.deleteUsuario(id);
    }
  }
  cerrarModal() {
    this.mostrar = false;
  }
}
