import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

const BASEURL = 'http://localhost:3002/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  GetAllUsers(): Observable<any> {
    return this.http.get(`${BASEURL}/users`);
  }

  GetUserById(id): Observable<any> {
    return this.http.get(`${BASEURL}/user/${id}`);
  }

  GetUserByName(username): Observable<any> {
    return this.http.get(`${BASEURL}/username/${username}`);
  }

  FollowUser(userFollowed): Observable<any> {
    return this.http.post(`${BASEURL}/follow-user`, {
      userFollowed
    });
  }

  UnFollowUser(userFollowed): Observable<any> {
    return this.http.post(`${BASEURL}/unfollow-user`, {
      userFollowed
    });
  }

  MarkNotification(id, deleteValue?): Observable <any> {
    return this.http.post(`${BASEURL}/mark/${id}`, {
    id,
    deleteValue
  }); 
  }

  MarkAllAsRead(): Observable <any> {
    return this.http.post(`${BASEURL}/mark-all`, {
      all: true
  }); 
  }
}
