import { TokenService } from './../../services/token.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import io from 'socket.io-client';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  socket: any;
  users = [];
  loggedInUser: any;
  userArr = [];

  constructor(private usersService: UsersService, private tokenService: TokenService) {
    this.socket = io('http://localhost:3002');
  }

  ngOnInit() {
    this.loggedInUser = this.tokenService.GetPayload();
    this.GetUsers();
    this.GetUser();
//ngOnInit used for listening - Server emits its own event
    this.socket.on('refreshPage', () => {
      this.GetUsers();
      this.GetUser();
    });
    }

  GetUsers() {
    this.usersService.GetAllUsers().subscribe(data => {
      _.remove(data.result, { username: this.loggedInUser.username });
      this.users = data.result;
    });
  }

  GetUser() {
    this.usersService.GetUserById(this.loggedInUser._id).subscribe(data => {
      this.userArr = data.result.following;
      console.log(data);
    });
  }

  FollowUser(user) {
    this.usersService.FollowUser(user._id).subscribe(data => {
      this.socket.emit('refresh', {});
      //this.socket.emit('refresh', {});
    });
  }

  //following array?
  CheckInArray(arr, id) {
    //console.log(arr);
    const result = _.find(arr, ['userFollowed._id', id]);

    //console.log(result);
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
