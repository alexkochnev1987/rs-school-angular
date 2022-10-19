import { Injectable } from '@angular/core';
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

export class StoreService<T> {
  private readonly state$: BehaviorSubject<T>;
  protected get state(): T {
    return this.state$.getValue();
  }
  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  protected getState() {
    return this.state$;
  }

  protected setState(newState: Partial<T>) {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isLoading$ = new BehaviorSubject<SpinnerServiceState>({
    [SpinnerStateName.login]: false,
  });
  state$ = new BehaviorSubject(false);

  loadingStatus: Observable<boolean> = this.state$.pipe(
    switchMap(value => (value ? of(true).pipe(delay(500)) : of(true)))
  );

  requestStarted(value: SpinnerStateName) {
    this.isLoading$.next({ ...this.isLoading$.value, [value]: true });
  }

  requestEnded(value: SpinnerStateName) {
    this.isLoading$.next({ ...this.isLoading$.value, [value]: false });
  }

  getLoading(value: SpinnerStateName) {
    return this.isLoading$.asObservable().pipe(
      map(x => x[value]),
      switchMap(value => (!value ? of(false) : of(true).pipe(delay(500))))
    );
  }
}
