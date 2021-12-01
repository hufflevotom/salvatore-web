import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { Evidencia } from '../models/Evidencia';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {
  URL_API = environment.URL_API
  modelo = '/evidencia'
  package = new EventEmitter<Evidencia>();
  evidenciaSeleccionado: Evidencia = {
    _id: '',
    createdAt: '',
    updatedAt: ''
  };
  evidencias!: any;

  constructor(private http: HttpClient) { }

  obtenerEvidencias() {
    return this.http.get<Evidencia[]>(this.URL_API + this.modelo)
  }

  crearEvidencia(evidencia: Evidencia) {
    return this.http.post(this.URL_API + this.modelo, evidencia)
  }

  actualizarEvidencia(evidencia: Evidencia) {
    return this.http.put(`${this.URL_API}${this.modelo}/${evidencia._id}`, evidencia)
  }

  borrarEvidencia(_id: String) {
    return this.http.delete(`${this.URL_API}${this.modelo}/${_id}`)
  }

}
