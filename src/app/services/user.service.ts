import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public apiUrl:string = 'https://quiet-sea-92909.herokuapp.com';

  public iniciarSesion(User: UserModel):Promise<any>{
      const url = `${this.apiUrl}/login/signin`
      return this.http.post(url,User).toPromise();
  }

  public registrarse(User:UserModel):Promise<any>{
    const url = `${this.apiUrl}/login/signup`
    return this.http.post(url,User).toPromise();
  }
}
