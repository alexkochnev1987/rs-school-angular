import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isLoading = false;
  cardForm = new FormGroup({
    title: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    img: new FormControl('', [Validators.required, this.validateUrl]),
    link: new FormControl('', [Validators.required, this.validateUrl]),
    date: new FormControl('', [Validators.required, this.validateDate]),
  });
  constructor() {}

  onSubmit() {
    console.log(this.cardForm);
    return this.cardForm;
  }

  validateUrl(control: FormControl): { [s: string]: boolean } | null {
    let url;
    try {
      url = new URL(control.value);
    } catch (e) {
      return { ['url']: true };
    }
    return null;
  }

  validateDate(control: FormControl): { [s: string]: boolean } | null {
    let date;
    try {
      if (Date.now() < new Date(control.value).getTime())
        return { ['date']: true };
    } catch (e) {
      return { ['date']: true };
    }
    return null;
  }
}
