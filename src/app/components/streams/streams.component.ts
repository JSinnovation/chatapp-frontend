import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  token: any;
  streamsTab = false;
  topStreamsTab = false;
  // place in the constructor below
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {
    // this.token = this.tokenService.GetToken();
    this.token = this.tokenService.GetPayload();
    // console.log(this.token);
    this.streamsTab = true;
    this.token = this.tokenService.GetPayload();
    const tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs, {});//materialize CSS
  }

  ChangeTabs(value) {
    if (value === 'streams') {
      this.streamsTab = true;
      this.topStreamsTab = false;
    }

    if (value === 'top') {
      this.streamsTab = false;
      this.topStreamsTab = true;
    }
  }
}
