import { Component } from '@angular/core';
import { Formato } from '../modelo/FormatoADirector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {
  formato:Formato={
    _objetivos:'',
    _con_entrega:'',
    _realizacion:'',
    _recursos:'',
    _financiacion:''
  };
  constructor(private router: Router){

  }
}
