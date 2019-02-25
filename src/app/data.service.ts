import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  h1Style: boolean = false;
  constructor(private http: HttpClient) { }

  firstClick() {
    this.h1Style = true;
    return console.log('clicked');
  }
  /**
   * @uses function to fetch user list from fake API 
   * @author KIM
   */
  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
}
