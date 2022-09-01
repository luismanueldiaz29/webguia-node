import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { HomeComponent } from './components/home/home.component';
import { ListSiteComponent } from './components/list-site/list-site.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarHomeComponent } from './components/nav-bar-home/nav-bar-home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material';

@NgModule({
  declarations: [
    AppComponent,
    AddSiteComponent,
    HomeComponent,
    ListSiteComponent,
    LoginComponent,
    NavBarComponent,
    NavBarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
