import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { FolioService } from 'src/app/services/folio.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {
  estado: string = 'block';
  estadoUsuario: string = 'none';
  valoresUsuario: string = 'none';
  formUsuario: string = 'none';
  estadoVehiculo: string = 'none';
  valoresVehiculo: string = 'none';
  formVehiculo: string = 'none';
  estadoFolio: string = 'none';
  valoresFolio: string = 'none';
  formFolio: string = 'none';
  data?: Object = {};
  dniStorage: string;
  mensajeRespuesta = {
    type: "",
    message: ""
  };

  constructor(
    public usuarioService: UsuarioService,
    public vehiculoService: VehiculoService,
    public folioService: FolioService,
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
        this.estadoFolio = 'none';
        this.valoresFolio = 'none';
        this.formFolio = 'none';
      } else {
        this.estadoUsuario = 'none';
        this.estadoVehiculo = 'block';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'none';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'block';
        this.estadoFolio = 'none';
        this.valoresFolio = 'none';
        this.formFolio = 'none';
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
        this.estadoFolio = 'none';
        this.valoresFolio = 'none';
        this.formFolio = 'none';
      } else {
        this.estadoUsuario = 'block';
        this.estadoVehiculo = 'none';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'block';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'none';
        this.estadoFolio = 'none';
        this.valoresFolio = 'none';
        this.formFolio = 'none';
      }
    })
    this.folioService.package.subscribe(folio => {
      if (folio === this.folioService.folioSeleccionado) {
        this.data = folio;
        this.estadoUsuario = 'none';
        this.estadoVehiculo = 'none';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'none';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'none';
        this.estadoFolio = 'block';
        this.valoresFolio = 'block';
        this.formFolio = 'none';
      } else {
        this.estadoUsuario = 'none';
        this.estadoVehiculo = 'none';
        this.estado = 'none';
        this.valoresUsuario = 'none';
        this.formUsuario = 'none';
        this.valoresVehiculo = 'none';
        this.formVehiculo = 'none';
        this.estadoFolio = 'block';
        this.valoresFolio = 'none';
        this.formFolio = 'block';
      }
    })
  }

  editarVehiculo() {
    this.valoresUsuario = 'none';
    this.formUsuario = 'none';
    this.valoresVehiculo = 'none';
    this.formVehiculo = 'block';
    this.valoresFolio = 'none';
    this.formFolio = 'none';
  }

  editarUsuario() {
    this.valoresUsuario = 'none';
    this.formUsuario = 'block';
    this.valoresVehiculo = 'none';
    this.formVehiculo = 'none';
    this.valoresFolio = 'none';
    this.formFolio = 'none';
  }
  editarFolio() {
    this.valoresUsuario = 'none';
    this.formUsuario = 'none';
    this.valoresVehiculo = 'none';
    this.formVehiculo = 'none';
    this.valoresFolio = 'none';
    this.formFolio = 'block';
  }

  obtenerVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe(
      res => {
        this.vehiculoService.vehiculos = res;
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/vehiculos']);
        });
      },
      error => {
          this.mensajeRespuesta = error.error;
        }
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
      error => {
          this.mensajeRespuesta = error.error;
        }
    )
  }

  obtenerFolios() {
    this.folioService.obtenerFolios().subscribe(
      res => {
        this.folioService.folios = res;
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/folios']);
        });
      },
      error => {
          this.mensajeRespuesta = error.error;
        }
    )
  }

  agregarVehiculo(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.vehiculoService.actualizarVehiculo(form.value).subscribe(
        (res: any) => {
          console.log(res);
          if (res['type'] === 'success') {
            console.log(res);
            form.reset();
            this.obtenerVehiculos();
            this.mensajeRespuesta = {
              type: res.type,
              message: res.message,
            };
          }
        },
        error => {
          this.mensajeRespuesta = error.error;
        }
      )
    } else {
      this.vehiculoService.crearVehiculo(form.value).subscribe(
        res => {
          this.obtenerVehiculos();
          form.reset();
          console.log(res)
        },
        error => {
          this.mensajeRespuesta = error.error;
        }
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
        error => {
          this.mensajeRespuesta = error.error;
        }
      )
    } else {
      this.usuarioService.crearUsuario(form.value).subscribe(
        res => {
          this.obtenerUsuarios();
          form.reset();
          console.log(res)
        },
        error => {
          this.mensajeRespuesta = error.error;
        }
      )
    }
    this.estadoVacio();
  }

  agregarFolio(form: NgForm) {
    if (form.value._id) {
      this.folioService.actualizarFolio(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
          this.obtenerFolios();
        },
        error => {
          this.mensajeRespuesta = error.error;
        }
      )
    } else {
      this.folioService.crearFolio(form.value).subscribe(
        res => {
          this.obtenerFolios();
          form.reset();
          console.log(res)
        },
        error => {
          this.mensajeRespuesta = error.error;
        }
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
        error => {
          this.mensajeRespuesta = error.error;
        }
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
        error => {
          this.mensajeRespuesta = error.error;
        }
      )
    } else {
      console.log(false)
    }
  }

  quitarFolio(id: string) {
    if (confirm('¿Está seguro?')) {
      this.folioService.borrarFolio(id).subscribe(
        res => {
          this.obtenerFolios();
          console.log(res)
          this.estadoVacio();
        },
        error => {
          this.mensajeRespuesta = error.error;
        }
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
    this.estadoFolio = 'none';
    this.valoresFolio = 'none';
    this.formFolio = 'none';
  }

}
