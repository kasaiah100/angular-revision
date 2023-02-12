import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  resolve:any
 items:any
constructor(private item:LandingService,private ar:ActivatedRoute){
this.items=this.item.getItems()

}
}
