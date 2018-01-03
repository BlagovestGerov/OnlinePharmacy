import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { RegisterModel } from './models/register.model';
import { LoginModel } from './models/login.model';

const appKey = "kid_SkgxlSK-z" // APP KEY HERE;
const appSecret = "d69bd5a0d3fe489c8e90b7c8c68cb743" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable()
export class AuthenticationService {
  private currentAuthtoken : string;
  private currentAdmin : string;

  constructor(
    private http : HttpClient
  ) { }

  login(loginModel : LoginModel) {
    return this.http.post(
      loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  register(registerModel : RegisterModel) : Observable<Object> {
    return this.http.post(
      registerUrl, 
      JSON.stringify(registerModel),
      { 
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }
  
  isLoggedIn() {
    let authtoken : string = localStorage.getItem('authtoken');
    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

  isAdmin(){
     if(localStorage.getItem('userRole')==='admin'){
       return true
     }else{
       return false
     }
  }

  // isRoleAdmin(){
    // if (localStorage.getItem("isAdmin") !== null) {
    //   let isAdmin : string = localStorage.getItem('isAdmin');
    // }else if(localStorage.getItem("isUser") !==null){
    //   let isUser : string = localStorage.getItem('isUser');
    // }
  // }

  // get isAdmin() {
  //   return this.currentAdmin;
  // }

  // set isAdmin(value : string) {
  //   this.currentAdmin = value;
  // }
  

  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}