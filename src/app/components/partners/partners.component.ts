import { Component} from '@angular/core';
import Brands from '../../data/brands';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
brands = Brands;
}
