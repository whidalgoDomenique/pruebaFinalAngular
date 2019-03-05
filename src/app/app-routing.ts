import { Route } from '@angular/router';
import { UserComponent } from './users/user.component'
import { UserEditComponent } from './users/user-edit/user.edit-component';
import { UserCreateComponent } from './users/user-create/user.create-component';

export const routes: Route[]= [

    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },

    {
        path: 'users',
        component: UserComponent 
    },
    {
        path:'new-user',
        component: UserCreateComponent

    },
    {
        path: 'users/:id',
        component: UserEditComponent
    },


] 