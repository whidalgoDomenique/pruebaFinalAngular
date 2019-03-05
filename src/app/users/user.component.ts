import { OnInit, Component } from '@angular/core';
import { User } from './user.model';
import { UserServices } from '../services/user-services';

@Component({

    selector: 'app-user',
    templateUrl: './user.component.html'

})
export class UserComponent implements OnInit{
    users: User[];
    userToDelete: User;

    constructor(private userService: UserServices) {}

    ngOnInit(){  
        this.users;  
        this.getUsers();
    }

    private getUsers(){
        this.userService.getUsers().subscribe
        ((users: User[]) => {
            this.users = users;
            console.log(users);
        })
    }

    deleteUser(user: User) {
        this.userToDelete = user;
        const { id } = this.userToDelete;

        this.userService.deleteUser(id).subscribe(response => {
                this.users = this.users
                    .filter(user => user.id !== id);
            
            });
    }


}