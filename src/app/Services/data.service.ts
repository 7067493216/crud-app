import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor(
    
  ) { }

createDb(){
  let users:User[] = [
   {
    id: 1,
    title: 'Mr', 
    firstName: 'Md', 
    lastName: 'Alam' , 
    email: 'mdsam@gmail.com', 
   dob :'10/02/1997', 
   password : 'Sam@123456',
    confirmPassword:'Sam@123456', 
    acceptTerms: true 
   },

   {
    id: 2,
    title: 'Mr', 
    firstName: 'Shamshad', 
    lastName: 'Alam' , 
    email: 'mdsham@gmail.com', 
   dob :'11/02/1997', 
   password : 'Sam@1234567',
    confirmPassword:'Sam@1234567', 
    acceptTerms: true 
   },

   {
    id: 3,
    title: 'Mrs', 
    firstName: 'Tanya', 
    lastName: 'herinkhaide' , 
    email: 'tanya@gmail.com', 
   dob :'02/05/1998', 
   password : 'Tanya@123456',
    confirmPassword:'Tanya@123456', 
    acceptTerms: true 
   },

   {
    id: 4,
    title: 'Mr', 
    firstName: 'Mdd', 
    lastName: 'Alamm' , 
    email: 'mdsam123@gmail.com', 
   dob :'10/09/1997', 
   password : 'Sams@123456',
    confirmPassword:'Sams@123456', 
    acceptTerms: true 
   }

  ];
  return {users};
}

}
