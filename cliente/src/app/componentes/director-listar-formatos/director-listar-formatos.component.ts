import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { DirectorService } from 'src/app/services/director.service';
import { Proceso } from '../modelo/Proceso';
import { Formato } from '../modelo/FormatoADirector';
import { Estudiante } from '../modelo/Estudiante';

@Component({
  selector: 'app-director-listar-formatos',
  templateUrl: './director-listar-formatos.component.html',
  styleUrls: ['./director-listar-formatos.component.css']
})
export class DirectorListarFormatosComponent {
  constructor(private router: Router,private services:DirectorService,private route: ActivatedRoute){}
  estudiantes:number[]=[];
  estudiante:Estudiante={
    _codigo:0,
   _proceso:0,
   _nombre:'',
   _correo:''
  }
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
  id:number=0;
  proceso:Proceso={
    id:0,
    usuario:0,
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
  ngOnInit():void{
    this.mostrarFormatosProceso();
    this.mostrarEstudiantes();
  }
  mostrarEstudiantes(){
    console.log(this.proceso.estudiantes[0]);
    this.services.getEstudiante(this.proceso.estudiantes[0]).subscribe(
      (res: any) => {
        this.formato = res;
      },
      err => console.error(err)
      )
  }
  async mostrarFormatosProceso(){
    const id = await this.mostrarFormato();
    if(id != 0){
      this.getFormato(id);
    }
    else  console.log('error')
  }

  getFormato(id:number){
    this.services.getFormato(id).subscribe(
      (res: any) => {
        //console.log(res);
        this.formato = res;
      },
      err => console.error(err)
      )
  }
  private mostrarFormatosAsync(): Promise<Proceso>{
    return new Promise<Proceso>((resolve, reject) => {
      const params = this.route.snapshot.params;
      console.log(params);
        if (params) {
            this.services.getFormatosId(params['id']).subscribe(
            (res: Proceso|any) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        }
    });
  }
  async mostrarFormato(): Promise<number> {
    try {
      const response = await this.mostrarFormatosAsync();
      this.proceso = response;
      this.estudiantes = this.proceso.estudiantes;
      console.log(this.proceso);
      return response.id;
    } catch (error) {
      console.error(error);
      return 0; 
    }
  }

  irSubirFormato(){
    this.router.navigate(['/directorLlenarFormato']);
  }
}
