import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Folio } from 'src/app/models/Folio';
import { FolioService } from 'src/app/services/folio.service';

@Component({
  selector: 'app-validar-folios',
  templateUrl: './validar-folios.component.html',
  styleUrls: ['./validar-folios.component.css']
})
export class ValidarFoliosComponent implements OnInit {
  folio = this.folioService.folioSeleccionado;
  displayedColumns: string[] = ['numeroFolio','idDetalleCliente.dni','idDetalleCliente.telefono','idDetalleCliente.direccion','idDetalleEntrega.fechaEntrega','idDetallePedido.descripcionPedido'];
  dataSource: MatTableDataSource<Folio>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Folio>();
  constructor(public folioService: FolioService) {
    this.dataSource = new MatTableDataSource<Folio>(this.folioService.folios);
  }

  ngOnInit(): void {
    this.obtenerFolios();
  }

  ngAfterViewInit(): void {
    this.obtenerFolios();
  }

  obtenerFolios() {
    this.folioService.obtenerFolios().subscribe(
      res => {
        this.folioService.folios = res;
        this.dataSource = new MatTableDataSource<Folio>(this.folioService.folios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => console.log(err)
    )
  }

}
