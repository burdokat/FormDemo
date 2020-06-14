import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {

  constructor(
    private router: Router,
  ) { }

  onSubmitLogin(): void {
    this.sendSignupOrLoginRequest();
  }

  private sendSignupOrLoginRequest(): void {
    this.router.navigate(['explore']);
  }
}
