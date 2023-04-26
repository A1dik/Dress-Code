import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthToken, Register} from "./models";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}user/login/`,
      {username, password}
    )
  }

  register(username: string, password: string, email: string, first_name: string, last_name: string): Observable<Register>{
    return this.client.post<Register>(`${this.BASE_URL}user/register/`,
      {username:username, password:password, email:email, first_name:first_name, last_name:last_name})
  }
}
