import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../model/person';
@Component({
  selector: 'app-city-report',
  templateUrl: './city-report.component.html',
  styleUrls: ['./city-report.component.css']
})
export class CityReportComponent implements OnInit {
  persons : Person[];
  city: String;
  show : Boolean;
  constructor(private personService : PersonService) {
    this.show = false;
   }
   
  onShow(){
    this.show = true;
    console.log(this.city);
    this.personService.findAllCity(this.city).subscribe(data => {
      this.persons = data;
      console.log(data);  
    });
    
  }

  ngOnInit(): void {

  }

}
