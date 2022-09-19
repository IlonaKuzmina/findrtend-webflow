import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  styleUrls: ['./nav-bar.component.css'],
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  constructor(private router: Router) {}
}
