
import { Component,EventEmitter,Input, OnInit,OnChanges, Output, SimpleChanges, SimpleChange, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit ,OnChanges ,OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
  let change:SimpleChange=changes['tit']
  this.previous=change.previousValue
  this.current=change.currentValue
  }
  ngOnInit(): void {
   console.log('ng on init')
   
  }



  @Input() tit:any
  @Output() send=new EventEmitter()
  previous:any
  current:any
  name='kasaiah'
  age='27'
  show=true
  case='two'
  color='red'
  bgcolor='blue'
  child='child to parent'
  counts:any
  count=0
  bb:any

  clicks(){
      alert('my name is kasaiah')
  }

  manual(event:any){
    alert(event.target.value)
}


 obj=[{
  name:'kasaiah',
  age:27,
  height:'6 feet',

}]
objo={
  name:'kasaiah',
  age:27,
  height:'6 feet',

}


colors=['red','blue','yellow']

login(){
  this.show=false
}
logout(){
  this.show=true
}


/* pipes */
upper='upper case'
lower='LOWER CASE'
date=new Date()
price='25000.285'
y=parseFloat(this.price)
x=parseInt(this.price)


senddata(){
this.send.emit(this.child)
}

destroy(){
this.bb=setInterval(()=>{
  this.count=this.count+1
  this.counts=this.count
  console.log(this.count)
},1000)

}

ngOnDestroy(): void {
  clearInterval(this.bb)
}

myform=new FormGroup(
  {uname:new FormControl('',[Validators.required,Validators.minLength(8)]),
   usere:new FormControl()
  }
)

shown(){
  console.log(this.myform)
}
sk=new FormGroup({
  skillsss:new FormArray([
    new FormControl(''),
  ])
})




add(){
  this.sk.controls.skillsss.controls.push(new FormControl())
  alert('sejdfgwfgwjDF')
  console.log(this.sk)
}

 wi:any
 user:any

constructor(private wish:HomeService,private title:Title){
this.title.setTitle('home compoent')
  this.wi=this.wish.wis().morning
this.wish.getData().subscribe((data:any)=>{
  console.log(data)})
this.user=this.wish.getUser()[0].name
}

}
