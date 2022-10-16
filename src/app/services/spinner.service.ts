import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { SpinnerStateName } from '../constants';
import { SpinnerServiceState } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isLoading$ = new BehaviorSubject<SpinnerServiceState>({
    [SpinnerStateName.login]: false,
  });
  constructor() {}
  requestStarted(value: SpinnerStateName) {
    this.isLoading$.next({ ...this.isLoading$.value, [value]: true });
  }

  requestEnded(value: SpinnerStateName) {
    this.isLoading$.next({ ...this.isLoading$.value, [value]: false });
  }

  getLoading(value: SpinnerStateName) {
    return this.isLoading$.asObservable().pipe(map(x => x[value]));
  }
}
