import { Component, OnDestroy, OnInit } from '@angular/core';
import { loginReq } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private suscriptionLogin : Subscription = new Subscription;

  userLogin: loginReq = { username: '', password: ''};

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void{ }

  ngOnDestroy(){
    this.suscriptionLogin.unsubscribe();
  }

  onLogin(){
    this.suscriptionLogin.add(
      this.authService.login(this.userLogin).subscribe(
        (res) => {
          if(res){
            this.router.navigate(['/home']);
          }
        }
      )
    )
  }

}
