import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../users/user.model';

//
@Injectable()
export class UserServices{
 private baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = environment.api
    }

    getUsers(){
        const fullUrl = `${this.baseUrl}/users/`;
        return this.http.get(fullUrl);
    }

    getUserById(id:number){
        const fullUrl = `${this.baseUrl}/users/${id}`;
        return this.http.get(fullUrl);
    }

    createUser(user: User) {
        const fullUrl = `${this.baseUrl}/users`;

        return this.http.post(fullUrl, user);
    }

    
    updateUser(id: number, user: User) {
        const fullUrl = `${this.baseUrl}/users/${id}`;

        return this.http.put(fullUrl, this.baseUrl);
    }

    deleteUser(id: number) {
        const fullUrl = `${this.baseUrl}/Users/${id}`;
        return this.http.delete(fullUrl);
    }


}