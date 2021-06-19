import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title: string = 'Inicio'
  folio?:Object
  objeto = {
    tipo: 'usuario',
    data: {
      dni: '73869994',
      nombre: 'Bruno'
    }
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
