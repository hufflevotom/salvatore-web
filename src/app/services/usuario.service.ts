import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_API = 'https://salvatore-backend.herokuapp.com/v1'
  modelo = '/usuario'
  user = new EventEmitter<Usuario>();
  usuarioSeleccionado: Usuario = {
    _id: '',
    dni: '',
    contrasena: '',
    nombre: '',
    apellidos: '',
    celular: '',
    idTipoRol: '',
    brevete: '',
    createdAt: '',
    updatedAt: ''
  };
  usuarios!: Usuario[];
  constructor(private http: HttpClient) { }
  ingresar(usuario: Usuario) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_API + this.modelo + '/sesion', usuario, { headers: header });
  }
  obtenerUsuarios(){
    return this.http.get<Usuario[]>(this.URL_API + this.modelo)
  }

  crearUsuario(usuario: Usuario){
    return this.http.post(this.URL_API + this.modelo,usuario)
  }

  actualizarUsuario(usuario: Usuario){
    return this.http.put(`${this.URL_API}${this.modelo}/${usuario._id}`,usuario)
  }

  borrarUsuario(_id: String){
    return this.http.delete(`${this.URL_API}${this.modelo}/${_id}`)
  }
}
