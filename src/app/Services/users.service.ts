import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '../models/i-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  userLogin(newUser: IUsers): Observable<IUsers> {
    return this.httpClient.post<IUsers>(
      ` http://localhost:3000/users`,
      JSON.stringify(newUser),
      this.http
    );
  }
}
