import { Component } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public model : LoginModel;
  public loginFail : boolean;
  public username : string;
  public lastName : string;
  public firstName : string;
  public roleId : string;
  public userRole: string;
  

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {
    this.model = new LoginModel("", "");
    this.username = "";
    this.roleId = "";
  }

  login () : void {
    this.authService.login(this.model)
      .subscribe(
        data => {
          this.successfulLogin(data);
        },
        err => {
          this.loginFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }


  
  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    localStorage.setItem('firstName', data['firstName']);
    localStorage.setItem('lastName', data['lastName']);
    this.loginFail = false;
    this.router.navigate(['/home']);

    if(data._kmd.roles){
    this.roleId = data._kmd.roles[0].roleId; 
    localStorage.setItem('roleId', this.roleId );
    localStorage.setItem('userRole', 'admin');
    console.log(this.roleId)  
      console.log('is admin')
    }else{
    localStorage.setItem('userRole', 'user');    
      console.log('is user, not admin')
    }    
  }
}
