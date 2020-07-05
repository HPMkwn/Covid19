import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: Number = 21.4932;
  lng : Number = 70.1366;
  zoom: Number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
