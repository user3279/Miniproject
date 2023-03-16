import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { HomeComponent } from './pages/home/home.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MoreComponent } from './pages/more/more.component';
const routes: Routes = [
  {
    path:'', component:HomeComponent
  },

  {
    path:'login', component:LoginComponent
  },

  {
    path:'signup', component:SignupComponent
  },

  {
    path:'Contact', component:ContactComponent
  },

  {
    path:'doctor', component:DoctorComponent
  },
  
  {
    path:'symptoms', component:SymptomsComponent
  },

  {
    path:'more', component:MoreComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
