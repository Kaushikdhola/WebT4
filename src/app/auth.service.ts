import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = 'https://express-t4.onrender.com/api/login';
    const body = {
      username: email,
      password: password
    };

    return this.http.post(url, body);
  }

  getUsers(): Observable<any[]> {
    const url = 'https://express-t4.onrender.com/api/users';
    return this.http.get<any[]>(url);
  }

  getUserById(userId: string): Observable<any> {
    const url = `https://express-t4.onrender.com/api/users/${userId}`;
    return this.http.get<any>(url);
  }
}
