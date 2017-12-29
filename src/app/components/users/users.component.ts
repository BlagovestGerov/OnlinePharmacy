import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { UserModel } from '../../core/models/view-models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // public model : UserModel;
  public username : string;
  public firstName : string;
  public lastName : string;
  

  users: UserModel;
  

  constructor(
    // private userService: UserService,
  ) { 
    // this.model = new UserModel("","","");
    this.username = localStorage.getItem('username');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
  }

  ngOnInit() {
    // this.getUsers();
  }

//   getUsers(): void{
//     this.userService.getUsers(this.model)
//     .subscribe(
//       data => {
//         this.successfulLogin(data);
//       },
//     )
//  }

//  get diagnostics() : string {
//   return JSON.stringify(this.model);
// }

// successfulLogin(data) : void {
  // users => this.users = users

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
