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
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
