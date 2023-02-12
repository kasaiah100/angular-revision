import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewproviderService {

  constructor() { }
  getProvider(){
    return 'i am new provider'
  }
}
