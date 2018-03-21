import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,  } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-login',
  template: `
    <div style="width: 50%; margin-left: 25%;">
      <mat-card>
        <mat-card-title>Login </mat-card-title>
        <mat-card-content>
          <mat-form-field style="width: 100%;">
            <input #username matInput placeholder="Username">
          </mat-form-field>
          <br>
          <mat-form-field style="width: 100%;">
            <input #password matInput placeholder="Password" type="password">
          </mat-form-field>
          <br>
          <button mat-raised-button color="primary" (click)="loginUser(username.value,password.value)">Login</button>
          <mat-card-footer>
            <mat-error *ngIf="error">
              {{errorMessage}}
            </mat-error>
          </mat-card-footer>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error: boolean = false;
  errorMessage: String = "";
  host = location.protocol + '//' +location.host;

  ngOnInit() {
  }

  loginUser(username,password){
    const user = {username: username, password: password};

    const httpOptions = {

    };

    this.http.post(this.host + "/api/user/login", user, httpOptions).subscribe(response =>{
      console.log(response)
    })
  }

  /*public post(url,params): Observable<CustomResponse> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    }

    return this.http.post( url, params , httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }

  private extractData(res: Response) {
    let body:CustomResponse = res.json();
    return body || { code: -100, message: 'Malformed Response from Server', responsedata:[]};
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {

      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/
}

export class CustomResponse
{
  code : number;
  message: string;
  responsedata: any;
}
