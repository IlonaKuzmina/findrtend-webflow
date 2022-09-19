import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextBtn]'
})
export class NextBtnDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') nextClickHandler() {
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    const link = elm.getElementsByClassName('link');
    elm.append(link[0]);
  }
}
