import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Folio } from 'src/app/models/Folio';
import { FolioService } from 'src/app/services/folio.service';

@Component({
  selector: 'app-validar-folios',
  templateUrl: './validar-folios.component.html',
  styleUrls: ['./validar-folios.component.css']
})
export class ValidarFoliosComponent implements OnInit {
  folio = this.folioService.folioSeleccionado;
  displayedColumns: string[] = ['numeroFolio','ruta','idDetalleCliente.dni','idDetalleCliente.nombre','idDetalleCliente.telefono','idDetalleCliente.direccion','idDetalleEntrega.idUbicacionEntrega.distrito','idDetallePedido.descripcionPedido','idLocalAbastecimiento.localAbastecimiento'];
  dataSource: MatTableDataSource<Folio>;  
  public loader: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Folio>();
  constructor(public folioService: FolioService, private router: Router) {
    this.dataSource = new MatTableDataSource<Folio>(this.folioService.folios);
  }

  ngOnInit(): void {
    this.obtenerFolios();
    this.loader=true;
  }

  ngAfterViewInit(): void {
    this.obtenerFolios();
  }

  obtenerFolios() {
    this.folioService.obtenerFoliosActuales().subscribe(
      res => {
        this.folioService.folios = res;
        this.dataSource = new MatTableDataSource<Folio>(this.folioService.folios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loader=false;
      },
      err => console.log(err)
    )
  }

  conforme(){
    this.router.navigate(['./habilitar-vehiculos']);
  }
}
