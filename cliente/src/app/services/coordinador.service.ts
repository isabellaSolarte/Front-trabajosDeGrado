import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class CoordinadorService{
    API_URI = "http://localhost:3000/api";
    constructor(private http:HttpClient) { }
    getRevisiones(codigoCoordinador:number){
        return this.http.get(`${this.API_URI}consejo/formato/a/${codigoCoordinador}`);
    }
}