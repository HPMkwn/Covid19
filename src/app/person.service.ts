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
    this.HelpersUrl = 'http://localhost:8989/api/';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.HelpersUrl + 'person');
  }
  public findById(contact:String): Observable<Person> {
    return this.http.get<Person>(this.HelpersUrl + 'person/' +  contact);
  }
 
  public save(Person: Person) {
    return this.http.post<Person>(this.HelpersUrl + 'person', Person);
}
public update(contact:String ,dead : Boolean , recovered : Boolean) {
  return this.http.post<Person>(this.HelpersUrl + 'person/' + contact, {contact,dead,recovered});
}
}
