import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import {CommonModule} from '@angular/common';
import { routes } from './app-routing';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserServices } from './services/user-services';
import { UserCreateComponent } from './users/user-create/user.create-component';
import { UserFormComponent } from './components/form/user-form/user-form.component';
import { UserEditComponent } from './users/user-edit/user.edit-component'



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    UserFormComponent,
    UserEditComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
