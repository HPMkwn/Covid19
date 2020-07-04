import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Helper } from './model/helper';

@Injectable({
  providedIn: 'root'
})

export class HelpService {


  private HelpersUrl: string;
  private http:HttpClient;

  Constructor(http:HttpClient) {
    this.http = http;
    this.HelpersUrl = 'http://localhost:8989/Helpers';
  }
  names;
  public addName(value : Helper) {
    this.names=value;
    return this.http.post<Helper>(this.HelpersUrl , this.names);
  }
  public getName() {
    return this.names;
  }
  public findAll(): Observable<Helper[]> {
    return this.http.get<Helper[]>(this.HelpersUrl);
  }
 
  public save(Helper: Helper) {
    return this.http.post<Helper>(this.HelpersUrl, Helper);
}
}