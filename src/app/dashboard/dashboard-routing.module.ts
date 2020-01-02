import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { USER_ROUTES } from './user/user.routing.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: 'usuario', children: USER_ROUTES, canActivate: [], data: { breadcrumb: 'Usuarios' }
  },
];

@NgModule({
  declarations: [ ],
  imports: [
    UserModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule { }
