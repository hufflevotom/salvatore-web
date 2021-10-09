import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  title: string = 'Usuarios';
  usuario = this.usuarioService.usuarioSeleccionado;
  displayedColumns: string[] = ['dni', 'nombre', 'apellidos', 'celular', 'rol'];
  dataSource: MatTableDataSource<Usuario>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Usuario>();
  public loader: boolean = false;
  public flag: boolean = false;
  constructor(public usuarioService: UsuarioService) {
    this.dataSource = new MatTableDataSource<Usuario>(this.usuarioService.usuarios);
  }

  ngOnInit(): void {
    this.loader = true;
    this.obtenerUsuarios();
  }

  ngAfterViewInit(): void {
    this.loader = true;
    this.obtenerUsuarios();

  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(
      res => {
        this.usuarioService.usuarios = res;
        this.dataSource = new MatTableDataSource<Usuario>(this.usuarioService.usuarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loader = false;
        this.flag = true;
      },
      err => console.log(err)
    )
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioService.usuarioSeleccionado = usuario;
    this.usuarioService.user.emit(usuario);
  }

  nuevoUsuario() {
    this.usuarioService.usuarioSeleccionado = {};
    this.usuarioService.user.emit({});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
