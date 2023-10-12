import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { rol } from '../modelo/rol';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administrador-crear',
  templateUrl: './administrador-crear.component.html',
  styleUrls: ['./administrador-crear.component.css']
})
export class AdministradorCrearComponent {
  roles:rol[] = [];
  usuario_id:string = '';
  usuario:Usuario ={
    _id:0,
    _nombre: '',
    _login: '',
    _password: '',
    _rol:[],
    _correo: ''
  };
  
  constructor(private router:Router,private services:AdministradorService){
    this.roles = [
      { _id: 1, _nombre: 'Director' },
    ];
  }
  mostrarMensaje: boolean = false;
  guardarUsuario() {
    if (this.usuario) {
      this.usuario._rol = this.roles;
      this.usuario._id = parseInt(this.usuario_id);
      console.log(this.usuario._id);
      this.services.saveUser(this.usuario).subscribe(
        res => {
          console.log(res);
          // Mostrar el mensaje de confirmación
          this.mostrarMensaje = true;
        },
        err => console.error(err)
        
      );
      this.mostrarMensaje = true;
      
    }
  }
  cerrarMensaje() {
    this.router.navigate(['/administrador']);
  }
 
}
