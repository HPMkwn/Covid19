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


  constructor(private formBuilder:FormBuilder,
    private  personService:PersonService,
    private router:Router,
    private route:ActivatedRoute) { }

      personSection = new FormGroup({
      personContact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      personFirstName: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      personLastName: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      personCity: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
      personState: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
      personEmail: new FormControl('',[Validators.required,Validators.email]),
      personGender: new FormControl('',[Validators.required]),
      personInfectionDate: new FormControl('',[Validators.required]),
      personAge: new FormControl('',[Validators.required]),
      personFamilyMembers: new FormControl('',[Validators.required]),
      personRecovered: new FormControl('',[Validators.required]),
      personDead: new FormControl('',[Validators.required]),
      personTravelledAbroad: new FormControl('',[]),
      personTravelledInCountry: new FormControl('',[]),
      personTravelledAbroadName: new FormControl('',[]),
      personTravelledInCountryName: new FormControl('',[]),
    });

    onSubmit(){
      console.log(this.personSection.getRawValue());
      this.personService.save(this.personSection.getRawValue()).subscribe(_result => this.gotoUserList());
    }
  
    gotoUserList() {
      this.router.navigate(['/person']);
    }


    ngOnInit(): void {
  }

}
