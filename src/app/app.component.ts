import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ProviderService } from './provider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parent to child';
  childerntwo:any
  a=true
 


 des(){
if(this.a==true){
  this.a=false
}
else{
  this.a=true
}
 }


constructor(private router:Router,private activatedroute:ActivatedRoute,
  private titles:Title,@Inject(DOCUMENT) private dom:any,private provide:ProviderService,
  @Inject('fake') private useValue:string,
  @Inject('function') private useFactory:any
  
  ){

  
    this.router.events.pipe(
      filter((e)=>e instanceof NavigationEnd),
      map(()=>{
        let child=this.activatedroute.firstChild
        if(child!.firstChild){
          child=child!.firstChild
          
        } return (child!.snapshot.data)
      })

  ).subscribe((data)=>{
   titles.setTitle(data['title'])
  })


}
  ngOnInit(): void {
 let head=this.dom.querySelector('head')
    let element=this.dom.createElement('link')
    element.setAttribute('href','www.kasaiah.com')
    element.setAttribute('rel','canonical')
    head.appendChild(element)




    console.log(this.provide.getProvider())
    console.log(this.useValue)
    console.log(this.useFactory.getProvider())
}





}







