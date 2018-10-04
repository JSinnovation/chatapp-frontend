import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import io from 'socket.io-client';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  socketHost: any;
  socket: any; //emit event
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.socket = io('http://localhost:3002');
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.postForm = this.fb.group({
      post: ['',Validators.required]
    });
   }

  submitPost() {
    this.postService.addPost(this.postForm.value).subscribe(data => {
     //this.socket.emit('refresh', {data: 'this is an event test'}); 
     this.socket.emit('refresh', {}); 
     //emit event in socket.io and pass in the event name and can send object (key, value) in {}
       this.postForm.reset() ;       
      return true;
       },
       error => {
         console.log(error);
        });
   }}
