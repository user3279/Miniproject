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
import { Singlepage1Component } from './pages/singlepage1/singlepage1.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
    MoreComponent,
    Singlepage1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
