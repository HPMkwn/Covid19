import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelpService } from '../help.service';
import { Person } from '../model/person';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {


  constructor() { }

      bioSection = new FormGroup({
      personContact: new FormControl(''),
      personFirstName: new FormControl('',[Validators.required,Validators.min(5)]),
      personLastName: new FormControl(''),
      personCity: new FormControl(''),
      personState: new FormControl(''),
      personEmail: new FormControl(''),
      personGender: new FormControl(''),
      personInfectionDate: new FormControl(''),
      personAge: new FormControl(''),
      personFamilyMembers: new FormControl(''),
      personRecovered: new FormControl(''),
      personDead: new FormControl(''),
      personTravelledAbroad: new FormControl(''),
      personTravelledInCountry: new FormControl(''),
      personTravelledAbroadName: new FormControl(''),
      personTravelledInCountryName: new FormControl(''),
    });
  ngOnInit(): void {
  }

}
