import { Component } from '@angular/core';
import { Router } from '@angular/router/'

import { User } from '../../users/user.model' 
import { UserServices } from '../../services/user-services';

@Component({
    selector: 'app-user-create',
    templateUrl: './user.create-component.html'
})
export class UserCreateComponent{
    newUser:User = new User();
    constructor(private router: Router,
                private userService: UserServices){
    
    }
    handleSubmit(user: User){
        this.userService.createUser(user).subscribe(response =>{
            this.router.navigate(['/users']);
        })
    } 
}