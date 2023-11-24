import { Component } from '@angular/core';
import { Evaluador } from '../modelo/Evaluador';
import { Router } from '@angular/router';
import { JefaturaService } from 'src/app/services/jefatura.service';

@Component({
  selector: 'app-evaluadores',
  templateUrl: './evaluadores.component.html',
  styleUrls: ['./evaluadores.component.css']
})
export class EvaluadoresComponent {
  evaluadores:Evaluador[] = [];
  constructor(private route: Router, private services:JefaturaService){}
  ngOnInit(){
    this.getEvaluadores();
  }
  getEvaluadores(){
    this.services.getEvaluadores().subscribe(
      (res: any) => {
        console.log(res);
        this.evaluadores = res;
      },
      err => console.log(err)
    );
  }
  iratras(){
    this.route.navigate(['jefaturaRegistro']);
  }
}
