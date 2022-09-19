import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button class="btn btn--{{color}}">{{title}}</button>',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() color!: string;
}
