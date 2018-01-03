import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/models/view-models/user';
import { AuthenticationService } from '../../authentication/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  public model : UserModel;
  public deleteUserFail : boolean;
  
  users: UserModel;

  constructor(
    private authService : AuthenticationService,
    private userService : UserService
  ) {
    this.model = new UserModel("","","");
   }

  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers(this.model)
    .subscribe(users => this.users = users);
 }

 deleteUser (targetId): void{           
      this.userService.deleteUser(targetId)
      .subscribe(
        data => {
          this.successfullDeleteUser(data);
        },
        err => {
          this.deleteUserFail = true;
        }
      )
    }

   
    successfullDeleteUser(data) : void {
      this.users = this.users.filter(h => h !== this.model);
  }
}
