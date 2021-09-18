import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css']
})
export class MonitoreoComponent implements OnInit {
  title: string = 'Monitoreo'
  constructor() { }

  ngOnInit(): void {
  }

}
