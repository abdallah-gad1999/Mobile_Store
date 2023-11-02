import { UserLogService } from './../../Services/user-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {
  user: boolean=true;// Define a user property to store user information

  constructor(private userLogService: UserLogService) {}

  ngOnInit() {
    // Check if the user is logged in when the component initializes
    this.user = this.userLogService.isUserLogOrNot;
  }

  logInFun() {
    // Call the login function from the service
    this.userLogService.logIn("marzoukgadelrab55@gmail.com", "1234567899");
    // Update the user property after login
    this.user = this.userLogService.isUserLogOrNot;
  }

  logOutFun() {
    // Call the logout function from the service
    this.userLogService.logOut();
    // Update the user property after logout
    this.user = this.userLogService.isUserLogOrNot;
  }
}
