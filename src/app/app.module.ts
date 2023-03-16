import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { CancerComponent } from './pages/cancer/cancer.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { Singlepg1Component } from './pages/singlepg1/singlepg1.component';
import { MoreComponent } from './pages/more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    DoctorComponent,
    CancerComponent,
    SymptomsComponent,
    NavbarComponent,
    Singlepg1Component,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
