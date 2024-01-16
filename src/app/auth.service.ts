import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:5000/auth/register";
  private _loginUrl = "http://localhost:5000/auth/login";

  constructor(public http: HttpClient, private _router: Router) { }

  registerUser(user:any) {
    return this.http.post<any>(this._registerUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  loginUser(user:any) {
    return this.http.post<any>(this._loginUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
