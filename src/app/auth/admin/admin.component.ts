import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomCard } from 'src/app/interfaces';
import { addCard } from 'src/app/redux/actions/cards.actions';
import { selectCustomCard } from 'src/app/redux/selectors/card.selector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isLoading = false;
  cardForm = this.fb.group({
    title: [
      '',
      [Validators.minLength(3), Validators.maxLength(20), Validators.required],
    ],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    img: ['', [Validators.required, this.validateUrl]],
    link: ['', [Validators.required, this.validateUrl]],
    date: ['', [Validators.required, this.validateDate]],
  });
  store$ = this.store.select(selectCustomCard);
  constructor(private store: Store, private fb: FormBuilder) {}

  onSubmit() {
    this.dispatchCard(this.cardForm.value);
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
    try {
      if (Date.now() < new Date(control.value).getTime())
        return { ['date']: true };
    } catch (e) {
      return { ['date']: true };
    }
    return null;
  }

  dispatchCard(card: Partial<CustomCard>) {
    function guard(a: null | undefined | string) {
      return a ?? '';
    }
    const newCard: CustomCard = {
      date: card.date ?? '',
      description: guard(card.description),
      img: guard(card.img),
      link: guard(card.link),
      title: guard(card.title),
    };
    this.store.dispatch(addCard({ card: newCard }));
  }
}
