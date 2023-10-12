import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrador-crear',
  templateUrl: './administrador-crear.component.html',
  styleUrls: ['./administrador-crear.component.css']
})
export class AdministradorCrearComponent implements OnInit{
  constructor(private router:Router,private activeRouter:ActivatedRoute){

  }
  ngOnInit(): void {
      
    const params = this.activeRouter.snapshot.params;
  }
}
