import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http:HttpClient) { }


  getTareas():Promise<any>{
    const url = ' https://jsonplaceholder.typicode.com/todos';
    return firstValueFrom(this.http.get(url));
  }
  
}
