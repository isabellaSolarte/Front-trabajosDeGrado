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
        res => {
          console.log(res);
          this.usuario = Object.assign({}, res) as Usuario;
          console.log(this.usuario);
          this.edit = true;
         

        },
        err => console.error(err)
      );
    }
  }

  obtenerId(): number {
    return this.usuario._id;
  }

  mostrarMensaje: boolean = false;


  updateUsuario(): void {
    console.log(this.usuario._id);
    this.mostrarMensaje = true;
    this.services.updateUser(
      this.usuario._id,
      this.usuario
    ).subscribe(
      res => {
        this.mostrarMensaje = true;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  cerrarModal() {
    this.mostrarMensaje = false;
    this.router.navigate(['/administrador']);

  }

}