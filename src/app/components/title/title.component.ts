import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h1 class="title">{{title}}</h1>',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  @Input() title!: string;
}
