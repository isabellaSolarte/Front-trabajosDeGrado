import { Component } from '@angular/core';
import { Formato } from '../modelo/FormatoADirector';
import { Router } from '@angular/router';
import { DirectorService } from 'src/app/services/director.service';

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
constructor(private router: Router,private services:DirectorService){

}
guardarFormato(){
  if(this.formato)
  console.log(this.formato);
 /* this.services.saveFormatoA(this.formato).subscribe(
    res => {
      console.log(res);
      // Mostrar el mensaje de confirmación
      this.mostrarMensaje = true;
    },
    err => console.error(err)
    )*/

}
cerrarMensaje() {
  this.router.navigate(['/administrador']);
}
}
