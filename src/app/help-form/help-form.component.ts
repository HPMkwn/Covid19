import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelpService } from '../help.service';
import { Helper } from '../model/helper';
@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.css']
})
export class HelpFormComponent implements OnInit {



  constructor(private formBuilder:FormBuilder,
    private  helpers:HelpService) { 
      this.helpers = helpers;
    }

    bioSection = new FormGroup({
      helperContact: new FormControl(''),
      helperName: new FormControl('',[Validators.required,Validators.min(5)]),
      helperCity: new FormControl(''),
      helperState: new FormControl(''),
      helperEmail: new FormControl(''),
      helperAddress: new FormControl(''),
      Description: new FormControl(''),
    });

     helper : Helper[];
    onSubmit(){
      console.log(this.bioSection.getRawValue());
      this.helpers.addName(this.bioSection.getRawValue());

      console.log(this.helpers.getName());
    }
  ngOnInit(): void {
  }

}

// readonly HelperUrl = 'https://localhost:8989/Helpers';

// posts : any;
// constructor(private http : HttpClient){}
// getposts(){
//   this.posts = this.http.get(this.HelperUrl)
//   console.log(this.posts);
// }