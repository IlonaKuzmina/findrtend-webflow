import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.css']
})
export class PartnerCardComponent {
  @Input() image!: string;
  @Input() name!: string;
}
