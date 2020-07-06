import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../model/person';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person : Person;
  constructor(private formBuilder:FormBuilder,
    private  personService:PersonService,
    private router:Router,
    private route:ActivatedRoute) {this.person = new Person(); }

      personSection = new FormGroup({
      personContact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      personFirstName: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(25)]),
      personLastName: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(25)]),
      personCity: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
      personState: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
      personEmail: new FormControl('',[Validators.required,Validators.email]),
      personGender: new FormControl(''),
      personInfectionDate: new FormControl('',[Validators.required]),
      personAge: new FormControl(25,[Validators.required]),
      personFamilyMembers: new FormControl(5,[Validators.required]),
      personRecovered: new FormControl('no'),
      personDead: new FormControl('no'),
      personTravelledAbroad: new FormControl('no',[]),
      personTravelledInCountry: new FormControl('no',[]),
      personTravelledAbroadCityName: new FormControl('',[]),
      personTravelledInCountryCityName: new FormControl('',[]),
    });




    onSubmit(){

      const demo = this.personSection.getRawValue();
      this.person.personAge = demo.personAge;
      this.person.personCity = demo.personCity;
      this.person.personContact = demo.personContact.toString();
      this.person.personDead = demo.personDead=="yes" ? true : false;
      this.person.personEmail = demo.personEmail;
      this.person.personFamilyMembers = demo.personFamilyMembers;
      this.person.personFirstName = demo.personFirstName;
      this.person.personGender = demo.personGender=="male" ? "Male" : "Female";
      this.person.personInfectionDate = demo.personInfectionDate;
      this.person.personLastName = demo.personLastName;
      this.person.personRecovered = demo.personRecovered=="yes" ? true : false;
      this.person.personState = demo.personState;
      this.person.personTravelledAbroad = demo.personTravelledAbroad=="yes" ? true : false;
      this.person.personTravelledAbroadCityName = demo.personTravelledAbroadCityName;
      this.person.personTravelledInCountry = demo.personTravelledInCountryCityName=="yes"? true:false;
      this.person.personTravelledInCountryCityName = demo.personTravelledInCountryCityName;

      console.log(this.person);
      
      this.personService.save(this.person).subscribe(_result => this.gotoUserList());
    }
  
    gotoUserList() {
      this.router.navigate(['/person']);
    }


    ngOnInit(): void {
  }

}
