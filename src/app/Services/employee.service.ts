import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

base_url: string = "http://localhost:4200/api/";

  constructor(
    private httpService: HttpClient
  ) { }

getAllUsers(){
return this.httpService.get(this.base_url + "users");
}

getUser(userId:number){
  return this.httpService.get(`${this.base_url}users/${userId}`)
}

addUser(user:User){
  return this.httpService.post(`${this.base_url}users`,user)
}

updateUser(user:User){
  return this.httpService.put(`${this.base_url}users/${user.id}`,user)
}

deleteUser(userId:number){
  return this.httpService.delete(`${this.base_url}users/${userId}`);
}


}
