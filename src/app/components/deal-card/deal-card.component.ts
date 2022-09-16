import { Component } from '@angular/core';

@Component({
  selector: 'app-deall-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.css'],
})
export class DeallCardComponent {
  selectedPersonal = false;
  selectedRegular = true;
  selectedPremium = false;

  clickHandler(selected: string): void {
    if (selected === 'personal') {
      this.selectedPersonal = true;
      this.selectedRegular = false;
      this.selectedPremium = false;
    } else if (selected === 'premium') {
      this.selectedPersonal = false;
      this.selectedRegular = false;
      this.selectedPremium = true;
    } else {
      this.selectedPersonal = false;
      this.selectedRegular = true;
      this.selectedPremium = false;
    }
  }
}
