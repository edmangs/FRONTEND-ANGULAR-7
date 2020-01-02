import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent, 
    UserAdminComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent, 
    UserAdminComponent
  ],
  exports: [
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent, 
    UserAdminComponent
  ],
})
export class UserModule { }
