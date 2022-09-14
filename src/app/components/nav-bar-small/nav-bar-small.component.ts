import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar-small',
  templateUrl: './nav-bar-small.component.html',
  styleUrls: ['./nav-bar-small.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarSmallComponent {
  closeResult!: string;

  constructor(private offcanvasService: NgbOffcanvas) {}


  openTop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'top' });
  }
}
