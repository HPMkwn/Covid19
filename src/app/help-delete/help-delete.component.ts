import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from '../model/helper';
@Component({
  selector: 'app-help-delete',
  templateUrl: './help-delete.component.html',
  styleUrls: ['./help-delete.component.css']
})
export class HelpDeleteComponent implements OnInit {

  contact: String;
  show : Boolean;
  constructor(private helpService : HelpService,    private router:Router,
    private route:ActivatedRoute        ) {
    this.show = false;
   }
   
  onShow(){
    this.show = true;
    console.log(this.contact);
    this.helpService.delete(this.contact).subscribe(_result => this.gotoUserList());;
  }

  gotoUserList() {
    this.router.navigate(['/help']);
  }
  ngOnInit(): void {

  }

}
