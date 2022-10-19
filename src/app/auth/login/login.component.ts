import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  concatMap,
  interval,
  map,
  mergeMap,
  startWith,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import {
  PasswordValidatorSymbols,
  RouterStateValue,
  SpinnerStateName,
} from 'src/app/constants';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  unsubscribe$ = new Subject();
  isLoading$ = this.spinnerService.getLoading(SpinnerStateName.login);
  login = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
      this.passwordValidator,
    ]),
  });
  PasswordValidatorSymbols = PasswordValidatorSymbols;

  get _password() {
    return this.login.get('password');
  }

  get _user() {
    return this.login.get('userName');
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  logIn() {
    return this.authService.login();
  }

  logOut() {
    this.authService.logout();
    localStorage.clear();
  }

  onSubmit() {
    this.spinnerService.requestStarted(SpinnerStateName.login);
    this.logIn()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(x => {
        this.router.navigate([RouterStateValue.main]);
        this.spinnerService.requestEnded(SpinnerStateName.login);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(0);
    this.unsubscribe$.complete();
  }

  passwordValidator(control: FormControl): { [s: string]: boolean } | null {
    const upperCase = new RegExp('[A-Z]');
    const lowerCase = new RegExp('[a-z]');
    const numbers = new RegExp('[0-9]');
    const special = new RegExp('[*@!#%&()^~{}]');
    let obj: { [s: string]: boolean } = {};
    if (!control.value.match(upperCase))
      obj[PasswordValidatorSymbols.upperCase] = true;
    if (!control.value.match(lowerCase))
      obj[PasswordValidatorSymbols.lowerCase] = true;
    if (!control.value.match(numbers))
      obj[PasswordValidatorSymbols.numbers] = true;
    if (!control.value.match(special))
      obj[PasswordValidatorSymbols.special] = true;
    if (Object.keys(obj).length === 0) return null;
    return obj;
  }
}
