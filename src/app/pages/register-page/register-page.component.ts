import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit, AfterViewInit {
  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  registerForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildFrom();
    this.focusInputElement();
    console.log(this.registerForm.errors);
  }

  ngAfterViewInit(): void {
    this.focusInputElement();
  }

  submitHandler(): void {
    if (this.registerForm.valid) {
      this.registerForm.reset();
      this.focusInputElement();
    }
  }

  private buildFrom(): void {
    this.registerForm = this.fb.group({
      user: ['', [Validators.minLength(5)]],
      email: ['', [Validators.email]],
      zip: ['', [Validators.pattern('[A-Z]{2}[0-9]{4}')]],
    });
  }

  private focusInputElement(): void {
    this.nameInput?.nativeElement.focus();
  }
}
