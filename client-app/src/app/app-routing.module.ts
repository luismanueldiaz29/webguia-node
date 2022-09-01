import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { HomeComponent } from './components/home/home.component';
import { ListSiteComponent } from './components/list-site/list-site.component';
import { LoginComponent } from './components/login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addsite',
    component: AddSiteComponent
  },
  {
    path: 'listsite',
    component: ListSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
