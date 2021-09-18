import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  @Input()   mensajeRespuesta = {
    type: "",
    message: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
