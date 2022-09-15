import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  @ViewChild('mailInput') mailInput: ElementRef | undefined;


  ngOnInit(): void {
    this.focusInputElement();
  }

  ngAfterViewInit(): void {
    this.focusInputElement();
  }


  focusInputElement(): void {
    this.mailInput?.nativeElement.focus();
  }
}
