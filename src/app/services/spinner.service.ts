import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  delay,
  interval,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { SpinnerStateName } from '../constants';
import { SpinnerServiceState } from '../interfaces';
import {
  makeSpinnerStateFalse,
  makeSpinnerStateTrue,
} from '../redux/actions/cards.actions';
import { selectSpinnerState } from '../redux/selectors/card.selector';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinnerState$ = this.store.select(selectSpinnerState);
  constructor(private store: Store) {}

  requestStarted(value: SpinnerStateName) {
    this.store.dispatch(makeSpinnerStateTrue({ name: value }));
  }

  requestEnded(value: SpinnerStateName) {
    this.store.dispatch(makeSpinnerStateFalse({ name: value }));
  }

  getLoading(value: SpinnerStateName) {
    return this.spinnerState$.pipe(
      map(x => x[value]),
      switchMap(value => (!value ? of(false) : of(true).pipe(delay(500))))
    );
  }
}
