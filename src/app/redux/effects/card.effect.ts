import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, tap } from 'rxjs';
import { addCard } from '../actions/cards.actions';

@Injectable()
export class CardEffect {
  constructor(private actions$: Actions) {}
  fetchCards$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addCard),
        catchError(() => EMPTY)
      );
    },
    { dispatch: false }
  );
}
