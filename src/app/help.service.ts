import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Helper } from './model/helper';

@Injectable({
  providedIn: 'root'
})


//Define each and every query functionns and retrive from here

export class HelpService {


  private HelpersUrl: string;
  private http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
    this.HelpersUrl = 'http://localhost:8989/';
  }

  public findAll(city:String): Observable<Helper[]> {
    return this.http.get<Helper[]>(this.HelpersUrl + 'help/' + city);
  }
 
  public save(helper: Helper) {
    return this.http.post<Helper>(this.HelpersUrl + 'help', helper);
}
public delete(contact: String) {
  return this.http.delete<Helper>(this.HelpersUrl + 'help/' + contact);
}
}