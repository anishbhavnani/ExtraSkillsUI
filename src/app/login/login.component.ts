import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators,FormsModule } from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent }  from '../app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


export interface DialogData {
 firstName: string;
 lastName: string;
}


@NgModule({
declarations: [
    AppComponent,
    MatDialogModule
    ],
imports: [
          BrowserModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
    ]
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService,public dialogRef: MatDialogRef<LoginComponent>,
 @Inject(MAT_DIALOG_DATA) public data: any) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(loginPayload).subscribe(data => {
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['list-user']);
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  get input() { return this.loginForm.controls; }

}
