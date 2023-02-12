import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.background-color') bg_color:any
  @HostListener('mouseenter') enter(){
    this.bg_color='blue'
  }
  @HostListener('mouseleave') leave(){
    this.bg_color='green'
  }
  @HostListener('click') click(){
    this.bg_color='orange'
  }
  
  constructor(private element:ElementRef,private renderer:Renderer2) {
  this.renderer.setStyle(this.element.nativeElement,'color','red')
   }

}
