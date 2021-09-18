import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  URL_API = environment.URL_API
  modelo = '/ruta'
  
  constructor(private http: HttpClient) { }

  getRutas(){
    return this.http.get<string[]>(this.URL_API + this.modelo)
  }
}
