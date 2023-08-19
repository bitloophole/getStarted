import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginCred: object): Observable<any> {
    const url = 'http://52.90.134.17:8081/api/login';
    return this.http.post(url, loginCred);
  }

  logout(): void {
    localStorage.clear();
  }
}
