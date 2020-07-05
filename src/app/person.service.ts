import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private HelpersUrl: string;
  private http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
    this.HelpersUrl = 'http://localhost:8080/api/';
  }


  //Find Data From Person Service  
  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.HelpersUrl + 'person');
  }
  public findById(contact:String): Observable<Person> {
    return this.http.get<Person>(this.HelpersUrl + 'person/' +  contact);
  }
  public findAllCity(city : String): Observable<Person[]> {
    return this.http.get<Person[]>(this.HelpersUrl + 'report/city/'+ city);
  }
  public findAllState(state :String): Observable<Person[]> {
    return this.http.get<Person[]>(this.HelpersUrl + 'report/city/' + state);
  }
  
  //Add Person to Table
  public save(person: Person) {
    return this.http.post<Person>(this.HelpersUrl + 'person', person);
  }

  //Update Person
  public update(person:Person) {
  return this.http.post<Person>(this.HelpersUrl + 'personupdate/',person);
}
}
