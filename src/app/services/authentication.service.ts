import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../entities/login';

const baseUrl = environment.baseUrlAuthentication;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly http: HttpClient) { }

  login(data: Login) {
    return this.http.post(`${baseUrl}/Login`, data);
  }
}
