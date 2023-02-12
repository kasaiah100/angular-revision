import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersCard:any
constructor(private profile:LandingService){}

ngOnInit(){
  this.usersCard=this.profile.getUsers()
}


}
