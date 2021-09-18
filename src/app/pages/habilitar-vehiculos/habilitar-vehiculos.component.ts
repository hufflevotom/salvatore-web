import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Responsable } from 'src/app/models/Responsable';
import { RutaService } from 'src/app/services/ruta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-habilitar-vehiculos',
  templateUrl: './habilitar-vehiculos.component.html',
  styleUrls: ['./habilitar-vehiculos.component.css']
})
export class HabilitarVehiculosComponent implements OnInit {
  public loader: boolean = true;
  respuesta : any = [];
  placas: [any] = [""];
  rutas!: string[]
  modelos:Responsable[] = [];
  @ViewChild("ruta") ruta!: ElementRef;
  @ViewChild("placa") placa!: ElementRef;
  @ViewChild("dni") dni!: ElementRef;

  constructor(
    public rutaService: RutaService,
    public vehiculoService: VehiculoService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getRutas();
    this.obtenerVehiculos();
    this.obtenerUsuarios();
  }

  getRutas() {
    this.rutaService.getRutas().subscribe(
      res => {
        this.rutas = res;
        for (let i = 0; i < res.length; i++) {
          res[i];
          const responsable = {ruta: res[i],idUsuario:"usuario",idVehiculo:"vehiculo"};
          this.modelos.push(responsable);
        }
        this.loader = false;
      },
      err => {
        console.log(err)
      }
    )
  }

  obtenerVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          this.placas.push(res[i].placa?.toString());
        }
        this.vehiculoService.vehiculos = res;
      },
      err => console.log(err)
    )
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(
      res => {
        this.usuarioService.usuarios = res;
      },
      err => console.log(err)
    )
  }

  print(form: NgForm) {
    console.log(this.modelos)
  }

  submit(form: NgForm) {
    if (!this.modelos) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }
  }

}
