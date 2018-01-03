import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { UserModel } from '../../core/models/view-models/user';
import { AuthenticationService } from '../../authentication/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public model : UserModel;
  public username : string;
  public firstName : string;
  public lastName : string;
  

  users: UserModel;
  

  constructor(
    private authService : AuthenticationService,
    private userService : UserService
  ) { 
    this.model = new UserModel("","","");
    this.username = localStorage.getItem('username');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers(this.model)
    .subscribe(users => this.users = users);
 }

 get diagnostics() : string {
  return JSON.stringify(this.model);
}

// successfullGetUsers(data) : void {
//   users => this.users = users

  // localStorage.setItem('username', data['username']);
  // localStorage.setItem('firstName', data['firstName']);
  // localStorage.setItem('lastName', data['lastName']);
  
  // this.authService.authtoken = data['_kmd']['authtoken'];
  // localStorage.setItem('authtoken', data['_kmd']['authtoken']);
  // localStorage.setItem('username', data['username']);
  // localStorage.setItem('firstName', data['firstName']);
  // localStorage.setItem('lastName', data['lastName']);  
  // this.loginFail = false;
  // this.router.navigate(['/home']);
// }

}
