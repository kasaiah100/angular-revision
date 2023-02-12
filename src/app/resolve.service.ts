import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor() { }
  observar= new Promise<Object>((resolve)=>{
    setTimeout(()=>{
      resolve({name:'kasaiah'})
    },4000)
  })

getUser(){
return this.observar
}



















}
