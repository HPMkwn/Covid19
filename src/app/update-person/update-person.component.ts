import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonService } from '../person.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UpdatePerson} from '../model/update-person';
@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  updatePerson :UpdatePerson;
  contact: String;
  show : Boolean;
  dead: Boolean;
  recovered :Boolean;
  constructor(private personService : PersonService) {
    this.updatePerson = new UpdatePerson();
   }
   
   personSection = new FormGroup({
      personContact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
          personRecovered: new FormControl('no'),
          personDead: new FormControl('no')
   });

  onSubmit(){
    const demo = this.personSection.getRawValue();
    this.updatePerson.contact = demo.personContact;
    this.updatePerson.recovered = demo.personRecovered=="yes" ? true : false;
    this.updatePerson.dead = demo.personDead=="yes" ? true : false;
    console.log(this.updatePerson);
    this.personService.update(this.updatePerson).subscribe(result=> console.log(result));
    
  }


  ngOnInit(): void {
  }

}
