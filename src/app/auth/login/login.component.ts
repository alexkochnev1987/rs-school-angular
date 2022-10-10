import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  login = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.min(3)]),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {}

  logIn() {
    return this.authService.login();
  }

  logOut() {
    this.authService.logout();
    localStorage.clear();
  }

  onSubmit() {
    this.isLoading = true;
    this.logIn().subscribe(x => {
      localStorage.setItem('token', JSON.stringify(x));
      this.router.navigate(['main']);
      this.isLoading = false;
    });
  }
}
