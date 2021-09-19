import { Component, Input, OnChanges } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnChanges {
  @Input()   mensajeRespuesta = {
    type: "",
    message: ""
  };
  public alerta: boolean = false;
  constructor() {}

  ngOnChanges() {
    this.cerrarRespuesta();
  }

  cerrarRespuesta(): void {
    if(this.mensajeRespuesta.message.length>0){
      this.alerta=true;
      timer(3000).subscribe((n) => {
        this.alerta=false;   
     });
    }    
  }

}
