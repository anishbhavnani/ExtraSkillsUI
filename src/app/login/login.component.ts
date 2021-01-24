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
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthenticationService } from '../service/authentication.service';

@NgModule({
declarations: [
    AppComponent    
    ],
imports: [          
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
  invalidLogin = false
   form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder,   
    public loginService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

get f() { return this.form.controls; }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  checkLogin() {
    if (this.form.valid) {
      //this.authService.login(this.form.value); // {7}

      this.loginService.authenticate(this.f.username.value, this.f.password.value)
        this.router.navigate(['home'])
        this.invalidLogin = false
    }else
      this.invalidLogin = true
    this.formSubmitAttempt = true;             // {8}
  }
    /*checkLogin(){   
      if (this.loginservice.authenticate(this.username, this.password)) {
        this.router.navigate([''])
        this.invalidLogin = false
    } else
        this.invalidLogin = true
    }*/
}
