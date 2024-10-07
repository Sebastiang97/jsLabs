import { Injectable } from '@angular/core';
import data from '../../../assets/data.json'
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = data

  addUsers(user: User) {
    if (user) {
      this.users.push(user)
    }
  }

  getUsers() {
    return [...this.users]
  }


}
