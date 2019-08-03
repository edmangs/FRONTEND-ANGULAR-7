import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  exports: [
    SharedModule
  ]
})
export class DashboardModule { }
