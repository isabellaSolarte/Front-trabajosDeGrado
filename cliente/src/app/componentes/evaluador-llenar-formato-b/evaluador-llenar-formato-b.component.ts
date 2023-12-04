import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluador-llenar-formato-b',
  templateUrl: './evaluador-llenar-formato-b.component.html',
  styleUrls: ['./evaluador-llenar-formato-b.component.css']
})
export class EvaluadorLlenarFormatoBComponent {
  constructor(private route:Router){}
  iratras(){
    this.route.navigate(['/evaluadorRegistros']);
  }
 
}
