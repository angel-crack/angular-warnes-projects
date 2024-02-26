import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private readonly URL = environment.api
  sendCredentials(email: string , password: string): Observable<any> {
    // console.log('its working the service',email,password)
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`,body)

  }

}
