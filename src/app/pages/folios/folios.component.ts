import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FolioService } from '../../services/folio.service';
import { Folio } from 'src/app/models/Folio';

@Component({
  selector: 'app-folios',
  templateUrl: './folios.component.html',
  styleUrls: ['./folios.component.css']
})
export class FoliosComponent implements OnInit, AfterViewInit {
  title: string = 'Folios';
  folio = this.folioService.folioSeleccionado;
  displayedColumns: string[] = ['numeroFolio', 'idDetalleCliente.dni', 'idDetalleCliente.telefono', 'idDetalleCliente.direccion', 'idDetalleEntrega.fechaEntrega', 'idDetallePedido.descripcionPedido'];
  dataSource: MatTableDataSource<Folio>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Folio>();
  public loader: boolean = false;
  public flag: boolean = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  // pageEvent: PageEvent;


  constructor(public folioService: FolioService) {
    this.dataSource = new MatTableDataSource<Folio>(this.folioService.folios);
  }

  ngOnInit(): void {
    this.loader = true;
    this.obtenerFolios();
  }

  ngAfterViewInit(): void {
    this.loader = true;
    this.obtenerFolios();

  }

  obtenerFolios() {
    this.folioService.obtenerFolios().subscribe(
      res => {
        this.folioService.folios = res;
        this.dataSource = new MatTableDataSource<Folio>(this.folioService.folios.docs);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loader = false;
        this.flag = true;
      },
      err => console.log(err)
    )
  }

  editarFolio(folio: Folio) {
    this.folioService.folioSeleccionado = folio;
    this.folioService.package.emit(folio);
  }

  nuevoFolio() {
    this.folioService.folioSeleccionado = {
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
    this.folioService.package.emit({});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
