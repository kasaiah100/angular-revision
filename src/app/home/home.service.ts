import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withHashLocation } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
 wis(){
     return {morning:'good morning',night:'good night'}
 }


getData(){
  return this.http.get('https://jsonplaceholder.typicode.com/users/1')
}

getUser(){
  return [{name:'kasaiah',age:27},{name:'banu',age:19}]
   
  
}

}
