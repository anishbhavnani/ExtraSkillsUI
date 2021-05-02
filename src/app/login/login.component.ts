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
import { MustMatch } from './must-match.validator';
import { UserDetail } from '../model/UserDetail'; 

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
   registerForm: FormGroup;          
   loginForm: FormGroup;          
   form: FormGroup;                    
   formSubmitAttempt: boolean;
    submitted = false;

  private userDetail = new UserDetail();  

  constructor(
    private fb: FormBuilder,
    private fe: FormBuilder,   
    public loginService: AuthenticationService,
    private router: Router
  ) {} 

  ngOnInit() { 
    this.registerForm = this.fb.group({
            childname: ['', Validators.required],
            dob: ['', Validators.required],            
            signupcondition: [false, Validators.requiredTrue],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
             mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });

        this.loginForm = this.fe.group({            
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

get fc() { return this.registerForm.controls; }
get f() { return this.loginForm.controls; }

  
   isFieldInvalid(field: string) { // {6}
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
    return true;
  } 


  checkLogin() {
    if (this.loginForm.valid) {
      this.userDetail.email=this.f.email.value;
      this.userDetail.password=this.f.password.value;
      this.loginService.authenticate(this.userDetail).subscribe(  
        response => {  
            let result =  response.json();  
              
            if(result > 0)  
            {  
              let token = response.headers.get("Authorization");  
  
              localStorage.setItem("token" , token);  
              localStorage.setItem("id" , result);  
              console.log("User logged in");
        //      this.router.navigate(['/profile', result]);  
            }  
            if(result == -1)  
            {  
              alert("please register before login Or Invalid combination of Email and password");  
            }  
             
        },  
        error => {  
            console.log("Error in authentication");  
        }  
      );
        
        //this.router.navigate(['home'])
        //this.invalidLogin = false;
    }else
      this.invalidLogin = true;
    this.formSubmitAttempt = true;             
  }

  onSubmit() {
        this.submitted = true;
//alert('SUCCESS!! :-');        
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-');
        //\n\n' + JSON.stringify(this.registerForm.value))
    }


 
}
