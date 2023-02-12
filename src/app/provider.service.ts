import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }
  getProvider(){
    return 'i am provider'
  }
  
  testInitilizer(){
    return new Promise<void>((resolve,reject)=>{
      setTimeout(()=>{
        console.log('app initilization successfull')
        resolve();
      },6000)
    })
  }
}
