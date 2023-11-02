import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLogService  {
  ifUserLog: BehaviorSubject<boolean>;

  constructor() {
    this.ifUserLog = new BehaviorSubject<boolean>(this.isUserLogOrNot);
  }

  logIn(email: string, password: any) {
    let token = "125956222";
    localStorage.setItem("accessToken", token);
    this.ifUserLog.next(true); // استخدم .next() لتحديث قيمة الـ BehaviorSubject
  }

  logOut() {
    localStorage.removeItem("accessToken");
    this.ifUserLog.next(false); 
  }

  get isUserLogOrNot(): boolean {
    return !!localStorage.getItem("accessToken"); 
  }
}
