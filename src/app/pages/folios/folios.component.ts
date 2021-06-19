import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folios',
  templateUrl: './folios.component.html',
  styleUrls: ['./folios.component.css']
})
export class FoliosComponent implements OnInit {
  title: string = 'Folios'
  objeto = {
    tipo: 'usuario',
    data: {
      dni: '73869994',
      nombre: 'Bruno'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
