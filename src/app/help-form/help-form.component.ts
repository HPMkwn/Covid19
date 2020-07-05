import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelpService } from '../help.service';
import { Helper } from '../model/helper';
@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.css']
})

//Bind data from client and use of services from here
export class HelpFormComponent {


  helper : Helper;
  constructor(private formBuilder:FormBuilder,
    private  helpService:HelpService,
    private router:Router,
    private route:ActivatedRoute) { }

    helpSection = new FormGroup({
      helperContact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      helperName: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      helperCity: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
      helperState: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
      helperEmail: new FormControl('',[Validators.email]),
      helperAddress: new FormControl('',[Validators.required,Validators.maxLength(200)]),
      Description: new FormControl('',[Validators.required,Validators.maxLength(200)]),
    });

     onSubmit(){
      console.log(this.helpSection.getRawValue());
      this.helpService.save(this.helpSection.getRawValue()).subscribe(_result => this.gotoUserList());
    }
  
    gotoUserList() {
      this.router.navigate(['/help']);
    }
}