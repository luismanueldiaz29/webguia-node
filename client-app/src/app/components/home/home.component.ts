import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();

  isAdmin = null;
  
  constructor(
    public authService : AuthService
  ) { }

  //como desubcribirme de otro observable
  ngOnInit(): void {
    this.authService.isAdmin$
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      res => this.isAdmin = res
    )
  }

  ngOnDestroy(): void{
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
