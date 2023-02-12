import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor() { 
  
  }
  getUsers(){return [
      {name:'kasaiah',age:28,education:'b tech'},
      {name:'banu',age:18,education:'inter'},
      {name:'harsha',age:17,education:'deploma'}
  
  ]}
getItems(){return [
      {brand:'apple',item:'apple watch',price:'200'},
      {brand:'samsung',item:'samsung watch',price:'150'},
      {brand:'realme',item:'realme watch',price:'100'}
    
    ]}

}