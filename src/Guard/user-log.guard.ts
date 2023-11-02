import { UsersService } from 'src/app/Services/users.service';
import { Inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { UserLogService } from 'src/app/Services/user-log.service';

export const userLogGuard: CanActivateFn = (route, state) => {
  return true;
  // const UsersService:Inject(UserLogService);
  // const router:Inject(Router);
  // if(UsersService.ifUserLog){
    
  // }
  
}
