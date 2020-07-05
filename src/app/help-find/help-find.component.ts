import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';
import { Helper } from '../model/helper';

@Component({
  selector: 'app-help-find',
  templateUrl: './help-find.component.html',
  styleUrls: ['./help-find.component.css']
})
export class HelpFindComponent implements OnInit {

  helpers : Helper[];
  city: String;
  show : Boolean;
  constructor(private helpService : HelpService) {
    this.show = false;
   }
   
  onShow(){
    this.show = true;
    console.log(this.city);
    this.helpService.findAll().subscribe(data => {
      this.helpers = data.filter(value=> value.helperCity==this.city);
      console.log(data);  
    });
    
  }

  ngOnInit(): void {

  }

}
