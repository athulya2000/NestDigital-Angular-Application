import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewAllcoursesComponent } from './view-allcourses/view-allcourses.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewAllfriendsComponent } from './view-allfriends/view-allfriends.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';

const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"careers",
    component:CareersComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"course",
    component:ViewAllcoursesComponent
  },
  {
    path:"friends",
    component:ViewAllfriendsComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"addfriends",
    component:AddFriendsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    NavigationComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    RegistrationComponent,
    ViewAllcoursesComponent,
    ViewAllfriendsComponent,
    Navbar2Component,
    AddCourseComponent,
    AddFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
