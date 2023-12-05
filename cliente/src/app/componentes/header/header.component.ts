import { Component, OnInit } from '@angular/core';
import { Acceso } from './acceso';
import { currentUser } from '../control-vista/currentUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  rutasUsuario!:Acceso[];
  constructor(private route:Router){
  }
  ngOnInit(): void {
    this.rutasUsuario = []
    const roles = currentUser.getCurrentRol();
    for(let rol of roles){
      this.rutasUsuario.push(new Acceso(rol._id));
    }
    console.log(roles);
  }
  cambiarComponente(ruta:string){
    this.route.navigate([ruta]);
  }
}
