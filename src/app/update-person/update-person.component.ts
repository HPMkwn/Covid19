import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonService } from '../person.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  person :Person;
  contact: String;
  show : Boolean;
  dead: Boolean;
  recovered :Boolean;
  constructor(private personService : PersonService) {
    this.person = new Person();
   }
   
   personSection = new FormGroup({
      personContact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
          personRecovered: new FormControl('no'),
          personDead: new FormControl('no')
   });

  onSubmit(){
    const demo = this.personSection.getRawValue();
    this.person.personContact = demo.personContact;
    this.person.personRecovered = demo.personRecovered=="yes" ? true : false;
    this.person.personDead = demo.personDead=="yes" ? true : false;
    console.log(this.person);
    this.personService.update(this.person);
    
  }


  ngOnInit(): void {
  }

}
