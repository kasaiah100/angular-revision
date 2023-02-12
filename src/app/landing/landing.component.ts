import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
constructor(private router:Router,private title:Title,private meta:Meta){
  this.title.setTitle('landing component')
  this.meta.addTag({name:'wish',content:'hiii'})
  this.meta.removeTag('name=description')
  
  }
ngOnInit() {

}
navi(){
  this.router.navigate(['navigate'],{queryParams:{path:'navigate'}})
  }
}
