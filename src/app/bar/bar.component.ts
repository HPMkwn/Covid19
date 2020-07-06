import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { DataService} from '../data.service';
import {StateInfo} from '../model/state-info';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  stateInfo : StateInfo;

  intArr = [];
  months = [ "nothing" , "January","February","March" , "April " , "May","June","July"];
  constructor(private dataService : DataService) { 
  }
  draw(){
    console.log(this.intArr);
    
    
    let barChart = new CanvasJS.Chart("barChartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: this.intArr
      }]
    });
      
    barChart.render();
  
  }


  ngOnInit(){
      this.dataService.getdata().subscribe(result=>{this.intArr = result; this.draw() });     
  }

}
