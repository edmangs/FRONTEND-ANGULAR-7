import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
