import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.css']
})
export class NgcontentComponent {
  fivecards:any
@ContentChild('one') onecard!:ElementRef
@ContentChild('two') twocard!:ElementRef
@ContentChild('three') threecard!:ElementRef
@ContentChild('four') fourcard!:ElementRef
@ContentChildren('five') fivecard!:QueryList<any>

ngAfterContentInit(){
  this.onecard.nativeElement.style.color='red'
  this.onecard.nativeElement.innerText='red'
  this.twocard.nativeElement.value='red'
  for( this.fivecards of this.fivecard){
    this.fivecards.nativeElement.style.color='blue'
  }
  this.fivecard.get(1).nativeElement.style.color='yellow'
}}
