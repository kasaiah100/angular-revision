import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items:any
  itemCard:any
  itemBrand:any
constructor(private item:LandingService,private ar:ActivatedRoute){}
ngOnInit(){
this.itemBrand=this.item.getItems()
this.ar.paramMap.subscribe((data)=>{
this.itemCard=data.get('brand')
})
console.log(this.itemBrand)
console.log(this.itemCard)
this.items=this.itemBrand.find((dat:any)=>{
return dat.brand==this.itemCard

})

}
}
