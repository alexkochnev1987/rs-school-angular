import { Injectable } from '@angular/core';
import { delay, Observable, of, Subject, tap } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  isLoggedIn$ = new Subject();
  redirectUrl: string | null = null;
  constructor(private localStorageService: LocalStorageService) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
        this.isLoggedIn$.next(true);
        this.localStorageService.setToken('token');
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isLoggedIn$.next(false);
    this.localStorageService.clear();
  }

  getLoginStatus() {
    return this.isLoggedIn$.asObservable();
  }

  getToken() {
    return this.localStorageService.getToken();
  }
}
