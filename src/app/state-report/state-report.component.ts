import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../model/person';
@Component({
  selector: 'app-state-report',
  templateUrl: './state-report.component.html',
  styleUrls: ['./state-report.component.css']
})
export class StateReportComponent implements OnInit {


  persons : Person[];
  state: String;
  show : Boolean;
  constructor(private personService : PersonService) {
    this.show = false;
   }
   
  onShow(){
    this.show = true;
    console.log(this.state);
    this.personService.findAllState(this.state).subscribe(data => {
      this.persons = data;
      console.log(data);  
    });
    
  }

  ngOnInit(): void {

  }
}
