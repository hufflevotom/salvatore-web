import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {
  @Input() objeto = {
    tipo: '',
    data: {}
  };
  estadoUsuario: string = 'none';
  estadoVehiculo: string = 'none';
  estado: string = 'block';
  valoresUsuario: string = 'none';
  valoresVehiculo: string = 'none';
  formUsuario: string = 'none';
  formVehiculo: string = 'none';
  @Input() usuario?: Usuario;
  @Input() vehiculo?: Vehiculo;
  data?: Object = {};
  dniStorage: string;
  constructor(
    public usuarioService: UsuarioService,
    public vehiculoService: VehiculoService,
    private router: Router
  ) {
    this.dniStorage = localStorage.getItem('dni') || '';
  }

  ngOnInit(): void {
    this.vehiculoService.vehicle.subscribe(vehiculo => {
      if (vehiculo === this.vehiculoService.vehiculoSeleccionado) {
        this.data = vehiculo;
        this.estadoUsuario = 'none';
        this.estadoVehiculo = 'block';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'none';
        this.valoresVehiculo = 'block';
        this.formVehiculo = 'none';
        console.log(this.data);
      } else {
        this.estadoUsuario = 'none';
        this.estadoVehiculo = 'block';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'none';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'block';
      }
    })
    this.usuarioService.user.subscribe(usuario => {
      if (usuario === this.usuarioService.usuarioSeleccionado) {
        this.data = usuario;
        this.estadoUsuario = 'block';
        this.estadoVehiculo = 'none';
        this.estado = 'none';
        this.valoresUsuario = 'block';
        this.formUsuario = 'none';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'none';
        console.log(this.data);
      } else {
        this.estadoUsuario = 'block';
        this.estadoVehiculo = 'none';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'block';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'none';
      }
    })
  }

  editarVehiculo() {
    this.valoresUsuario = 'none';
    this.formUsuario = 'none';
    this.valoresVehiculo = 'none';
    this.formVehiculo = 'block';
  }

  editarUsuario() {
    this.valoresUsuario = 'none';
    this.formUsuario = 'block';
    this.valoresVehiculo = 'none';
    this.formVehiculo = 'none';
  }

  obtenerVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe(
      res => {
        this.vehiculoService.vehiculos = res;
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/vehiculos']);
        });
      },
      err => console.log(err)
    )
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(
      res => {
        this.usuarioService.usuarios = res;
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/usuarios']);
        });
      },
      err => console.log(err)
    )
  }

  agregarVehiculo(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.vehiculoService.actualizarVehiculo(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
          this.obtenerVehiculos();
        },
        err => console.log(err)
      )
    } else {
      this.vehiculoService.crearVehiculo(form.value).subscribe(
        res => {
          this.obtenerVehiculos();
          form.reset();
          console.log(res)
        },
        err => console.log(err)
      )
    }
    this.estadoVacio();
  }

  agregarUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuarioService.actualizarUsuario(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
          this.obtenerUsuarios();
        },
        err => console.log(err)
      )
    } else {
      this.usuarioService.crearUsuario(form.value).subscribe(
        res => {
          this.obtenerUsuarios();
          form.reset();
          console.log(res)
        },
        err => console.log(err)
      )
    }
    this.estadoVacio();
  }

  quitarVehiculo(id: string) {
    if (confirm('¿Está seguro?')) {
      this.vehiculoService.borrarVehiculo(id).subscribe(
        res => {
          this.obtenerVehiculos();
          console.log(res)
          this.estadoVacio();
        },
        err => console.log(err)
      )
    } else {
      console.log(false)
    }
  }

  quitarUsuario(id: string) {
    if (confirm('¿Está seguro?')) {
      this.usuarioService.borrarUsuario(id).subscribe(
        res => {
          this.obtenerUsuarios();
          console.log(res)
          this.estadoVacio();
        },
        err => console.log(err)
      )
    } else {
      console.log(false)
    }
  }

  estadoVacio() {
    this.estadoUsuario = 'none';
    this.estadoVehiculo = 'none';
    this.estado = 'block';
    this.valoresUsuario = 'none';
    this.formUsuario = 'none';
    this.valoresVehiculo = 'none';
    this.formVehiculo = 'none';
  }

}
