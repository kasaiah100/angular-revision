import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitializeService {

  constructor() { }
  get(){
    return new Promise<void>((resolve,reject)=>{
      setTimeout(()=>{
        console.log('app initilization successfull')
        resolve();
      },6000)
    })
  }
}
