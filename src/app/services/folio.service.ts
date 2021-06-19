import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Folio } from '../models/Folio';

@Injectable({
  providedIn: 'root'
})
export class FolioService {
  URL_API = 'https://salvatore-backend.herokuapp.com/v1'
  modelo = '/folio'
  user = new EventEmitter<Folio>();
  folioSeleccionado: Folio = {
    _id: '',
    numeroFolio: '',
    ruta: '',
    nombre: '',
    dni: '',
    telefono: '',
    direccion: '',
    fechaEntrega: new Date(),
    latitud: '',
    longitud: '',
    distrito: '',
    ordenEntrega: 0,
    inicioVisita: 0,
    finVisita: 0,
    descripcionPedido: '',
    localAbastecimiento: '',
    createdAt: '',
    updatedAt: ''
  };
  folios!: Folio[];
  constructor(private http: HttpClient) { }
  
  obtenerFolios(){
    return this.http.get<Folio[]>(this.URL_API + this.modelo)
  }

  crearFolio(folio: Folio){
    return this.http.post(this.URL_API + this.modelo,folio)
  }

  actualizarFolio(folio: Folio){
    return this.http.put(`${this.URL_API}${this.modelo}/${folio._id}`,folio)
  }

  borrarFolio(_id: String){
    return this.http.delete(`${this.URL_API}${this.modelo}/${_id}`)
  }
}
