import { Component, OnInit } from '@angular/core';
import {AuthToken} from "../models";
import {UserService} from "../user.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  logged: boolean = false;
  username: string = '';
  password: string = '';
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.logged = true;
    }
  }

  login(){
    this.userService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', this.username);
      this.logged = true;
    })
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.logged = false;
  }

}
