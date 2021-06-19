import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../models/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  URL_API = 'https://salvatore-backend.herokuapp.com/v1'
  modelo = '/vehiculo'
  vehicle = new EventEmitter<Vehiculo>();
  vehiculoSeleccionado: Vehiculo = {
    _id: '',
    placa: '',
    marca: '',
    color: '',
    modelo: '',
    fechaFabricacion: new Date(),
    idEstadoVehiculo: '',
    vencimientoSoat: new Date(),
    vencimientoRevision: new Date(),
    createdAt: '',
    updatedAt: ''
  };
  vehiculos!: Vehiculo[];
  constructor(private http: HttpClient) { }
  
  obtenerVehiculos() {
    return this.http.get<Vehiculo[]>(this.URL_API + this.modelo)
  }

  crearVehiculo(vehiculo: Vehiculo) {
    return this.http.post(this.URL_API + this.modelo, vehiculo)
  }

  actualizarVehiculo(vehiculo: Vehiculo) {
    return this.http.put(`${this.URL_API}${this.modelo}/${vehiculo._id}`, vehiculo)
  }

  borrarVehiculo(_id: String) {
    return this.http.delete(`${this.URL_API}${this.modelo}/${_id}`)
  }
}
