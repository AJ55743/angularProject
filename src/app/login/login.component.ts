import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {}; // Use a proper type for loginUserData

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        (res: any) => { // Use a proper type for the response
          localStorage.setItem('token', res.access_token);
          this._router.navigate(['/special']);
        },
        err => console.error(err) // Use console.error for error logging
      );
  }
}
