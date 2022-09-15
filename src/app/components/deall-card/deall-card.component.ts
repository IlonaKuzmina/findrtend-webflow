import { Component} from '@angular/core';

@Component({
  selector: 'app-deall-card',
  templateUrl: './deall-card.component.html',
  styleUrls: ['./deall-card.component.css'],
})
export class DeallCardComponent  {
  isClicked: boolean = true;

  clickHandler(): void {
    this.isClicked = !this.isClicked;
  }
}
