import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evidencias',
  templateUrl: './evidencias.component.html',
  styleUrls: ['./evidencias.component.css']
})
export class EvidenciasComponent implements OnInit {
  title: string = 'Evidencias'
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
