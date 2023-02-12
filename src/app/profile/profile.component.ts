import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  users:any
  getuser:any
  getar:any
  resolve:any
   constructor(private profile:LandingService,private ar:ActivatedRoute){}
ngOnInit(){
this.getuser=this.profile.getUsers()
this.ar.queryParamMap.subscribe((data)=>{
this.getar=data.get('people')



})

}


}


