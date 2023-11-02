import { FormsModule } from '@angular/forms';
import { IUsers } from './../../models/i-users'; // Assuming 'IUsers' should be 'IUser'
import { UsersService } from './../../Services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  user: IUsers = {} as IUsers;

  constructor(private userService: UsersService) {}

  addNewUser() {
    this.userService.userLogin(this.user).subscribe({
      next: (user) => {},
    });
  }
}
