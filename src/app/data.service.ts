import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Need } from './model/need';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  private HelpersUrl: string;
  private http:HttpClient;
  arr : Observable<Number[]>;
  constructor(http:HttpClient) {
    this.http = http;
    this.HelpersUrl = 'http://localhost:8080/api/';
  }


  public findAll(): Observable<Need[]> {
    return this.http.get<Need[]>(this.HelpersUrl + 'map/statemin');
  }

  public getdata():Observable<Number[]>{
     
    this.arr[1] = this.http.get<Number>(this.HelpersUrl + 'report/2020/1' );
    this.arr[2] = this.http.get<Number>(this.HelpersUrl + 'report/2020/2' );
    this.arr[3] = this.http.get<Number>(this.HelpersUrl + 'report/2020/3' );
    this.arr[4] = this.http.get<Number>(this.HelpersUrl + 'report/2020/4' );
    this.arr[5] = this.http.get<Number>(this.HelpersUrl + 'report/2020/5' );
    this.arr[6] = this.http.get<Number>(this.HelpersUrl + 'report/2020/6' );
    this.arr[7] = this.http.get<Number>(this.HelpersUrl + 'report/2020/7' );

    return this.arr;
  }
}
