import { Injectable } from '@angular/core';
import { UserDetail } from '../model/UserDetail'; 
import { Http, RequestOptions , Headers } from '@angular/http';  
import { Observable } from 'rxjs';  
import { Router } from '@angular/router';  
import { JwtHelperService } from '@auth0/angular-jwt';  

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private  baseUrl = "http://localhost:8080/LoginLogoutExample/api/";  

  constructor(private http: Http, private router : Router) { }

  authenticate(userDetail : UserDetail) : Observable<any>  {
 
  console.log(userDetail.email +' '+userDetail.password);
    /*if (username === "user@test.com" && password === "password") {
      sessionStorage.setItem('username', username)

      return true;
    } else {
      return false;
    }*/

      let url = this.baseUrl + "login";  
      return this.http.post(url, userDetail);  
  }

  isUserLoggedIn() {
/*    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    */

    let jwtHelper = new JwtHelperService();  
  
    let token = sessionStorage.getItem('username');      
    if(!token)  
    {  
      return false;  
    }  
  
    if(token)  
    {  
      let expirationDate = jwtHelper.getTokenExpirationDate(token);  
      let isExpired = jwtHelper.isTokenExpired(token);  
      return !isExpired;      
    }
  }

  logOut() {
    sessionStorage.removeItem('username')
      this.router.navigate(['']); 
  }


}  
