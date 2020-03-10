import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharcolor]'
})
export class CharcolorDirective {

@HostListener('click') onClick() {
  this.charColor("red");
}

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '';  
  }   

  private charColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
