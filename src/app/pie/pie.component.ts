import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { DataService } from '../data.service';
import { StateInfo } from '../model/state-info';
import { Need } from '../model/need';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  array:any = [] 
  data: Need[];
  // array: Array<{ name: String, y: Number }>;
  constructor(private dataService: DataService) {
  }

  draw() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          {name : "Gujarat" , y : 19},
          {name : "Bihar" , y : 1},
          {name : "Punjab" , y : 1},
          {name : "Kerala" , y : 1},
          {name : "Tamilnadu" , y : 1},
          {name : "Maharashtra" , y : 2},
          {name : "Delhi" , y : 1}
        ]
      }]
    });

    chart.render();
  }
  onShow() {
    this.data.forEach(({ StateInfoStateName, StateInfoCases }) => this.array.push({ name: StateInfoStateName, y: StateInfoCases }));
    // console.log("this is filtered data", this.array);
    // console.log("hey there");
    this.draw();
  }



  ngOnInit(): void {
    this.dataService.findAll().subscribe(result => { this.data = result; console.log(this.data); this.onShow(); });

  }


}
