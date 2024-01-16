import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: { username: string, email: string, password: string,roles:string } = {
    username: '',
    email: '',
    password: '',
    roles:''
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => {
        console.log(res.access_token)
        localStorage.setItem('token', res.access_token);
        this._router.navigate(['/special']);
      },
      (err) => console.log(err)
    );
  }
}

