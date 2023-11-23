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
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'administrador';

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
    //eliminar
    editUsuario(id: number){
      console.log(id);
      this.router.navigate(['/editarUsuario/'+id]);
    }
  

  //eliminar
  deleteUsuario(id: number) {
    this.services.deleteUser(id).subscribe(
      () => {
        this.mensajeExito();
        this.getUsuarios(); // Vuelve a cargar los usuarios después de eliminar uno

      },
      err => {
        console.error(err);
        this.mensajeError();
      }
    );
  }
  confirmarEliminarUsuario(id: number) {
    const confirmacion = window.confirm('¿Está seguro de que desea eliminar este usuario?');
    if (confirmacion) {
      this.deleteUsuario(id);
    }
  }
  cerrarsesion(){
    this.router.navigate(['/login']);
  }
  mostrarModal(){
    this.showModal = true;
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No es posible eliminar el usuario'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha eliminado el usuario exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }
}