import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { DataService} from '../data.service';
import {StateInfo} from '../model/state-info';
@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit {


  stateInfo : StateInfo;

  intArr = [];
  months = [ "nothing" , "January","February","March" , "April " , "May","June","July"];
  constructor(private dataService : DataService) { 
  }

  ngOnInit() {
    
  }
}