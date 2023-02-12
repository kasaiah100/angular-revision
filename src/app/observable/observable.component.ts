import { Component, OnInit, ViewChild } from '@angular/core';
import { catchError, concatMap, delay, exhaustMap, from, fromEvent, map, mergeMap, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
myobservable:any
myof:any
myfrom:any
myfromevent:any
mypipe:any
orderone:any
ordertwo:any
order:any
preparingorder:any
@ViewChild('fromevent') myevent!:any
  ngOnInit(): void {
  
/* new observable */
this.myobservable=new Observable((observar)=>{
  observar.next('how are you')
  observar.complete()
})
this.myobservable.subscribe(
  (data:any)=>{
console.log(data)
},
(error:any)=>{console.log('error')},
()=>{console.log('complete')}

)

this.myof=of([1,2,3,4])
this.myof.subscribe((data:any)=>{
console.log(data)
})

this.myfrom=from([1,2,3,4])
this.myfrom.subscribe((data:any)=>{
console.log(data)
})

this.mypipe=from([5,5,7,8])
this.mypipe.pipe(
  map((x:any)=>{
      return x
  }),
  catchError((error:any)=>{
    return from([9,10])
  })
  ).subscribe((x:any)=>{
  console.log(x)
})


this.orderone=from([1,2,3,4])

this.orderone.pipe(
  map((data:any)=>{return of(data)}),
  mergeMap((val:any)=>{
  return val.pipe(delay(1000))
 

})).subscribe((data:any)=>{
console.log(data)
})



}



 


/* fromEvent */
 event(){
  this.myfromevent=fromEvent(
    this.myevent.nativeElement,'click'
  )
  this.myfromevent.subscribe((data:any)=>{
  console.log(data)
  })

 }






}

