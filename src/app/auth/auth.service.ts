import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable, of, tap } from 'rxjs';
import { changeLoginStatus } from '../redux/actions/cards.actions';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.store.dispatch(changeLoginStatus({ status: true }));
        this.localStorageService.setToken('token');
      })
    );
  }

  logout(): void {
    this.store.dispatch(changeLoginStatus({ status: false }));
    this.localStorageService.clear();
  }

  getToken() {
    return this.localStorageService.getToken();
  }
}
