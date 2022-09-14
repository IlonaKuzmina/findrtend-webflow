import { Component, Input } from '@angular/core';
import Brands, { BrandProps } from '../../data/brands';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
brands = Brands;
}
