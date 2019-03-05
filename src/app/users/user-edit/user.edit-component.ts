import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/'
import { UserServices } from '../../services/user-services';
import { User } from '../user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user.edit-component.html'
})
export class UserEditComponent implements OnInit{
    user: User;
    constructor (private route: ActivatedRoute, private router:Router, private userService:UserServices){

    }

    ngOnInit(){
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUserById(id).subscribe((user:User) =>{
            console.log(this.user);
            this.user = user;
        })
    }

    handleSubmit(user: User) {
        this.userService.updateUser(user.id, user)
             .subscribe(response => {
                 this.router.navigate(['/users']);
             });
    }
}