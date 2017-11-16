import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(
    private _http: Http,
  ) { }

  getCurrentUser() {
    return this.currentUser
  }


  create(newUser: User, callback) {
    this._http.post('/users', newUser).subscribe(
      res => {
        const user = res.json()
        if(!user.errors){
          this.currentUser = user;
        }
        callback(user);
      },
      err => console.log(err)
    );
  }

  logout(callback) {
    this._http.delete('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(callback) {
    this._http.get('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }


}
