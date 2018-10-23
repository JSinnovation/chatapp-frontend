import { UsersService } from './../../services/users.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import * as M from 'materialize-css';
import * as moment from 'moment';
import io from 'socket.io-client';
import _ from 'lodash';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;
  notifications = [];
  socket: any;
  count = [];

  constructor(private tokenService: TokenService, private router: Router, private usersService: UsersService) {
    this.socket = io('http://localhost:3002');
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayload();

    const dropDownElement = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropDownElement, {
      alignment: 'right',
      hover: true,
      coverTrigger: false
    });

    this.GetUser();
    this.socket.on('refreshPage', () => {
      this.GetUser();
    });
  }

  GetUser() {
    this.usersService.GetUserById(this.user._id).subscribe(data => {
      this.notifications = data.result.notifications.reverse();
      const value = _.filter(this.notifications, ['read', false]);
      this.count = value;
    }, err => {
      if (err.error.token === null) {
        this.tokenService.DeleteToken();
        this.router.navigate(['']);
      }
    }
    );
  }

  MarkAll() {
    this.usersService.MarkAllAsRead().subscribe(data => {
           this.socket.emit('refresh', {});
    });
  }
  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']);
  }
  GoToHome() {
    this.router.navigate(['streams']);
  }

  TimeFromNow(time) {
    return moment(time).fromNow();
  }
}
