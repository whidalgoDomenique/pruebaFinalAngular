import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

    @Input() users : User[];
    @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router){}

    ngOnInit() {
 } 

 handleDelete(user: User) {
    this.deleteUser.emit(user);
}

handleUpdate(id: number) {
    this.router.navigate(['users', id]);
}
}