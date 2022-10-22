import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectLoginStatus } from '../redux/selectors/card.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loginStatus$ = this.store.select(selectLoginStatus);
  constructor(private store: Store, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginStatus$.pipe(
      map(x => {
        if (x) return x;
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
