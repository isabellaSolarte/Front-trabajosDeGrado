import { Component } from '@angular/core';
import { Formato } from '../modelo/FormatoADirector';
import { Router } from '@angular/router';
import { DirectorService } from 'src/app/services/director.service';
import { Proceso } from '../modelo/Proceso';
import { Estudiante } from '../modelo/Estudiante';
import { currentUser } from '../control-vista/currentUser';

@Component({
  selector: 'app-director-llenar-formato',
  templateUrl: './director-llenar-formato.component.html',
  styleUrls: ['./director-llenar-formato.component.css']
})
export class DirectorLlenarFormatoComponent {
  bloquearAsesor = false; 
  bloquearEstudiante2 = false;
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  modalImage:string = '';
  navegacion:string = 'directorMain';
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
    _no_revision:0,
    _interes:''
  };
  proceso:Proceso={
    id:0,
    usuario:currentUser.getCurrentId(),
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
  public nombres:String[];
  public estudiantes:Estudiante[];
  public nombres2:String[];
  public estudiantes2:Estudiante[];
constructor(private router: Router,private services:DirectorService){
  this.estudiantes = [];
  this.nombres = ['No encontrado','No encontrado'];
  this.nombres2 = ['No encontrado','No encontrado'];
  this.estudiantes2 = [];
}
ngOnInit(){
  this.recuperarEstudiantes();
}
actualizarEstudiante(i:number)
{
  console.log(this.proceso.estudiantes);
  const estudiante:Estudiante|undefined = this.estudiantes.find(obj => obj._codigo === this.proceso.estudiantes[i]);
  if(estudiante)
  {
    this.nombres[i] = estudiante._nombre; 
  }else{
    this.nombres[i] = 'No encontrado';
  }
}
async recuperarEstudiantes(){

  this.services.getEstudiantes().subscribe(
    res => {
      this.estudiantes = res as Estudiante[];
      this.estudiantes2 = res as Estudiante[];
    },
    err => console.error(err)
    );
}
async guardarFormatoProceso() {
  if (!this.camposObligatoriosLlenos()) {
    alert('Debe llenar todos los campos obligatorios.');
    return;
  }

  const id = await this.guardarProceso();
  console.log(id);
  if (id !== 0) {
    this.guardarFormato(id);
  } else {
    console.log('error');
  }
}
  guardarFormato(id:number){
    console.log(this.formato);
    this.services.saveFormatoA(this.formato,id).subscribe(
        res => {
          console.log(res);
          // Mostrar el mensaje de confirmación
          this.mensajeExito();
        },
        err => {
          console.error(err);
          this.mensajeError();
        }
    );
  }
  async guardarProceso(): Promise<number> {
    console.log(this.proceso);
    try {
      const response = await this.createProcesoAsync(this.proceso);
      console.log(response);
      return response.id;
    } catch (error) {
      console.error(error);
      return 0; 
    }
  }
  private createProcesoAsync(proceso: Proceso): Promise<Proceso> {
    return new Promise<Proceso>((resolve, reject) => {
      this.services.createProceso(proceso).subscribe(
        (res: Proceso|any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  tipoDePropuestaSeleccionado() {
    if (this.proceso.tipo === 'Trabajo de investigación') {
      this.bloquearAsesor = true; // Bloquear asesor
      this.bloquearEstudiante2 = false; // Desbloquear estudiante 2
    } else if (this.proceso.tipo === 'Práctica profesional') {
      this.bloquearEstudiante2 = true; // Bloquear estudiante 2
      this.bloquearAsesor = false; // Desbloquear asesor
    } else {
      this.bloquearAsesor = false; // Desbloquear asesor
      this.bloquearEstudiante2 = false; // Desbloquear estudiante 2
    }
  }
  camposObligatoriosLlenos(): boolean {
    // Validar campos obligatorios según el tipo de propuesta
    if (
      !this.proceso.tipo ||
      !this.proceso.titulo ||
      !this.formato._objetivos ||
      !this.formato._con_entrega ||
      !this.formato._realizacion ||
      !this.formato._recursos ||
      !this.formato._financiacion ||
      !this.formato._interes
    ) {
      return false;
    }
  
    if (this.proceso.tipo === 'Práctica profesional') {
      // Validar que al menos un estudiante esté presente para Práctica profesional
      return this.proceso.estudiantes[0] !== 0;
    } else if (this.proceso.tipo === 'Trabajo de investigación') {
      // Validar que al menos un estudiante esté presente para Trabajo de investigación
      return this.proceso.estudiantes[0] !== 0;
    }
  
    return true;
  }
  irMain() {
    this.router.navigate(['/directorMain']);
  }

  mostrarModal(){
    this.showModal = true;
  }
  mensajeError(){
    this.modalImage = 'assets/cancelar.png';
    this.modalMessage = 'No se pudo guardar el formato'
    this.modalTitle = '!Algo ha salido mal!'
    this.showModal = true;
  }
  mensajeExito(){
    this.modalImage = 'assets/comprobado.png';
    this.modalMessage = 'Se ha guardado el formato exitosamente'
    this.modalTitle = 'Todo salió bien'
    this.showModal = true;
  }
}
