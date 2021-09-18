import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { Folio } from '../models/Folio';

@Injectable({
  providedIn: 'root'
})
export class FolioService {
  URL_API = environment.URL_API
  modelo = '/folio'
  package = new EventEmitter<Folio>();
  folioSeleccionado: Folio = {
    _id: '',
    numeroFolio: '',
    ruta: '',
    idDetalleCliente: {
      _id: '',
      nombre: '',
      dni: '',
      telefono: '',
      direccion: ''
    },
    idDetalleEntrega: {
      _id: '',
      fechaEntrega: '',
      idUbicacionEntrega: {
        _id: '',
        latitud: '',
        longitud: '',
        distrito: ''
      },
      ordenEntrega: 0,
      idHorarioVisita: {
        _id: '',
        inicioVisita: 0,
        finVisita: 0
      }
    },
    idDetallePedido: {
      _id: '',
      descripcionPedido: ''
    },
    idLocalAbastecimiento: {
      _id: '',
      localAbastecimiento: ''
    },
    createdAt: '',
    updatedAt: ''
  };
  folios!: Folio[];
  constructor(private http: HttpClient) { }

  obtenerFolios() {
    return this.http.get<Folio[]>(this.URL_API + this.modelo)
  }

  obtenerFoliosActuales() {
    return this.http.get<Folio[]>(this.URL_API + this.modelo + '/obtenerFolios')
  }

  crearFolio(folio: Folio) {
    return this.http.post(this.URL_API + this.modelo, folio)
  }

  actualizarFolio(folio: Folio) {
    return this.http.put(`${this.URL_API}${this.modelo}/${folio._id}`, folio)
  }

  borrarFolio(_id: String) {
    return this.http.delete(`${this.URL_API}${this.modelo}/${_id}`)
  }
  cargarFolios(dataString: string) {
    return this.http.post(this.URL_API + this.modelo + '/cargarFolios', JSON.parse(dataString))
  }
}
