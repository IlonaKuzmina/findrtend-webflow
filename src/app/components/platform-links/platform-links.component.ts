import { Component } from '@angular/core';
import PlatformLinks from 'src/app/data/platform_links';

@Component({
  selector: 'app-platform-links',
  templateUrl: './platform-links.component.html',
  styleUrls: ['./platform-links.component.css'],
})
export class PlatformLinksComponent {
  platforms = PlatformLinks;
}
