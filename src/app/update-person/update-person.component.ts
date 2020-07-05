import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  contact: String;
  show : Boolean;
  dead: Boolean;
  recovered :Boolean;
  constructor(private personService : PersonService) {
    this.show = false;
    this.dead = false;
    this.recovered = false;
   }
   
  onShow(){
    this.show = true;
    console.log(this.contact,this.dead,this.recovered);
    this.personService.update(this.contact,this.dead,this.recovered);
    
  }


  ngOnInit(): void {
  }

}
