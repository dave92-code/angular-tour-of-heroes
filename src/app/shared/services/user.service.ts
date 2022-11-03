import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/heroes/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UsersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  /**sacamos los users con susbcribe*/
  getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(this.UsersUrl);
  }

  /**sacamos los users con promesa */
  getUsersPromise(): Promise<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
     return firstValueFrom(this.http.get<User[]>(this.UsersUrl))
  }

  /**sacamos los users con await */
  getUsersPromiseAsync(): Promise<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return  firstValueFrom(this.http.get<User[]>(this.UsersUrl));
  }

}
