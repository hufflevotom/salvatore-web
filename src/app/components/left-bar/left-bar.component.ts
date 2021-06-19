import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.router.navigate(['./importar-archivo']);
  }
}
