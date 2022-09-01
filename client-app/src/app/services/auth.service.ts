import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginReq, loginRes, Role } from '../models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt'; // npm i @auth0/angular-jwt

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.URL;

  private loggedId = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<Role>(null);

  constructor(
    private http: HttpClient
  ) { this.checkToken(); }

  get isLogged(): Observable<boolean>{
    return this.loggedId.asObservable();
  }

  get isAdmin$ (): Observable<string>{
    return this.role.asObservable();
  }

  login(user: loginReq): Observable<loginRes | void>{
    return this.http.post<loginRes>(`${this.API_URL}/api/auth/login`, user).pipe(
      map((user : loginRes) => {
        this.saveStorage(user);
        this.loggedId.next(true);
        this.role.next(user.role);
        return user
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  logout(): void{
    localStorage.removeItem('user');
    this.loggedId.next(false);
    //set userIsLogged = false
  }

  private checkToken(): void{
    const user = JSON.parse(localStorage.getItem('user') || null);

    if(user){
      const isExpired = helper.isTokenExpired(user.token);

      if(isExpired){
        this.logout()
      }else{
        this.loggedId.next(true);
        this.role.next(user.role)
      }
    }
    // //si el token expira retorna true, contrario retorna false
  }

  private saveStorage(user: loginRes){
    console.log(user)
    const { id, message, ... rest} = user
    localStorage.setItem('user', JSON.stringify(rest));
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
