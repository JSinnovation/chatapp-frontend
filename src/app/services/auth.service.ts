import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
const BASEURL = 'http://localhost:3002/api/chatapp'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/register`, body);
    //reactive form module uses body - template form uses name user password
  }

  loginUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/login`, body);
  }
  
}
