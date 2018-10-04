import { PostFormComponent } from './../components/post-form/post-form.component';
import { CommentsComponent } from './../components/comments/comments.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3002/api/chatapp';

@Injectable({
  providedIn: 'root'
}) 
export class PostService {
  constructor(private http: HttpClient) {}

  addPost(body): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-post`, body);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${BASEURL}/posts`);
  }
  addLike(body): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-like`, body);
  }
  addComment(postId, comment): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-comment`, {
      postId,
      comment
    });
  }
  
  getPost(id):  Observable<any> {
    return this.http.get(`${BASEURL}/post/${id}`);
}
}
