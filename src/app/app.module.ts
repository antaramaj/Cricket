import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ApiService } from './service/api.service';
import { UserService } from './service/user.service';

import { LoginComponent } from './login/login.component';
import { LoginSecondComponent } from './login-second/login-second.component';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ConnectsComponent } from './connects/connects.component';
import { ClassManagerComponent } from './class-manager/class-manager.component';
import { FeesComponent } from './fees/fees.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChoiceComponent } from './profile-choice/profile-choice.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',                component: LoginComponent},
  { path: 'login-second/:uid',    component: LoginSecondComponent},
  { path: 'ProfileChoice',        component: ProfileChoiceComponent},
  { path: 'Dashboard',        component: DashboardComponent},
  { path: 'Calendar',        component: CalendarComponent},
  { path: 'Assignments',        component: AssignmentsComponent},
  { path: 'Connect',        component: ConnectsComponent},
  { path: 'ClassManager',        component: ClassManagerComponent},
  { path: 'Fees',        component: FeesComponent},
  { path: 'Profile',        component: ProfileComponent}
  
];





@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    LoginSecondComponent,

    

    NavbarComponent,

    SidebarComponent,

    FooterComponent,

    DashboardComponent,

    CalendarComponent,

    AssignmentsComponent,

    ConnectsComponent,

    ClassManagerComponent,

    FeesComponent,

    ProfileComponent,

    ProfileChoiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService,UserService,
    {provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
