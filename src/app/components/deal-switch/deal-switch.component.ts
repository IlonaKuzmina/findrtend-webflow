import { Component } from '@angular/core';

@Component({
  selector: 'app-deal-switch',
  templateUrl: './deal-switch.component.html',
  styleUrls: ['./deal-switch.component.css'],
})
export class DealSwitchComponent {
  yearlyDeal!: boolean;

  toggleSwitch() {
    this.yearlyDeal = !this.yearlyDeal;
    console.log(this.yearlyDeal);
  }
}
