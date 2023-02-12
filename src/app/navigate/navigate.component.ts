import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent {
  resolve:any
constructor(private ar:ActivatedRoute){
  this.resolve=this.ar.snapshot.data

}}
