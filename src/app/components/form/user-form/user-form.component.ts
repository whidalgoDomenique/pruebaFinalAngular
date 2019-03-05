import { OnInit, Input, Output, EventEmitter, Component } from '@angular/core';
import { User } from 'src/app/users/user.model';


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html' 
})
export class UserFormComponent implements OnInit{
    @Input() user: User;
    @Output() handleSubmit: EventEmitter<User> = new EventEmitter<User>();

    constructor(){
    }

    ngOnInit(){

    }

    onSubmit(formularioUser:any){
        if(formularioUser.valid){
            this.handleSubmit.emit(this.user);
        }
    }
}