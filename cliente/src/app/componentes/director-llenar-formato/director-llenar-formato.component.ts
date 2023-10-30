import { Component } from '@angular/core';
import { Formato } from '../modelo/FormatoADirector';
import { Router } from '@angular/router';
import { DirectorService } from 'src/app/services/director.service';
import { Proceso } from '../modelo/Proceso';

@Component({
  selector: 'app-director-llenar-formato',
  templateUrl: './director-llenar-formato.component.html',
  styleUrls: ['./director-llenar-formato.component.css']
})
export class DirectorLlenarFormatoComponent {
  mostrarMensaje: boolean = false;
  formato:Formato={
    _id:0,
    _objetivos:'',
    _con_entrega:'',
    _realizacion:'',
    _recursos:'',
    _financiacion:'',
    _per_programa:false,
    _revision:'',
    _recibido:'',
    _observaciones:'',
    _no_revision:0
  };
  proceso:Proceso={
    id:0,
    usuario:233,
    fa:0,
    fb:0,
    fc:0,
    ase:'',
    status_a:0,
    status_b:0,
    status_c:0,
    titulo:'',
    tipo:'',
    estudiantes:[]
  };
constructor(private router: Router,private services:DirectorService){

}
guardarFormatoProceso(){
  this.guardarProceso();
  this.guardarFormato();
}
guardarFormato(){
  console.log(this.formato);
  this.services.saveFormatoA(this.formato,this.proceso.usuario).subscribe(
    res => {
      console.log(res);
      // Mostrar el mensaje de confirmación
      this.mostrarMensaje = true;
    },
    err => console.error(err)
    )
}
guardarProceso(){
  console.log(this.proceso);
  this.services.createProceso(this.proceso).subscribe(
    res => {
      console.log(res);
      // Mostrar el mensaje de confirmación
      this.mostrarMensaje = true;
    },
    err => console.error(err)
  )
}
cerrarMensaje() {
  this.router.navigate(['/administrador']);
}
}
