import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';
import { Helper } from '../model/helper';
@Component({
  selector: 'app-help-delete',
  templateUrl: './help-delete.component.html',
  styleUrls: ['./help-delete.component.css']
})
export class HelpDeleteComponent implements OnInit {

  contact: String;
  show : Boolean;
  constructor(private helpService : HelpService) {
    this.show = false;
   }
   
  onShow(){
    this.show = true;
    console.log(this.contact);
    this.helpService.findAll(this.contact).subscribe(data => {

      console.log(data);  
    });
    
  }

  ngOnInit(): void {

  }

}
