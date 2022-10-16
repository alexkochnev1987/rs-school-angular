import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RouterStateValue, SpinnerStateName } from 'src/app/constants';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  notifier$ = new Subject();
  isLoading$ = this.spinnerService.getLoading(SpinnerStateName.login);
  login = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.min(3)]),
    password: new FormControl('', Validators.required),
  });
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
      .pipe(takeUntil(this.notifier$))
      .subscribe(x => {
        this.router.navigate([RouterStateValue.main]);
        this.spinnerService.requestEnded(SpinnerStateName.login);
      });
  }

  ngOnDestroy(): void {
    this.notifier$.next(0);
    this.notifier$.complete();
  }
}
