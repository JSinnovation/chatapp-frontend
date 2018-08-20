import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.init();
  }

  init() {
//pass in the formbuilder
this.signupForm = this.fb.group({
  username: ['', Validators.required],
  email: ['', Validators.email, Validators.required],
  password: ['', Validators.required]
});
  }

  signupUser() {
    console.log(this.signupForm.value);
    this.authService.registerUser('test').subscribe(data => {
      console.log(data);
    }, err => console.log(err));
    }
  }


