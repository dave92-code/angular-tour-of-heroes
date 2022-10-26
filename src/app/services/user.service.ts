import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**sacamos los users con susbcribe*/
  getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }

  /**sacamos los users con promesa */
  getUsersPromise(): Promise<User[] | undefined> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url).toPromise();
  }

  /**sacamos los users con await */
  getUsersPromiseAsync(): Promise<User[] | undefined> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return  this.http.get<User[]>(url).toPromise();
  }

}