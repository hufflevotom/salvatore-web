import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FolioService } from '../../services/folio.service';
import { Folio } from 'src/app/models/Folio';

@Component({
  selector: 'app-folios',
  templateUrl: './folios.component.html',
  styleUrls: ['./folios.component.css']
})
export class FoliosComponent implements OnInit, AfterViewInit{
  title: string = 'Folios';
  folio = this.folioService.folioSeleccionado;
  displayedColumns: string[] = ['numeroFolio','dni','telefono','direccion','fechaEntrega','descripcionPedido'];
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

  editarFolio(folio: Folio) {
    this.folioService.folioSeleccionado = folio;
    this.folioService.package.emit(folio);
  }

  nuevoFolio() {
    this.folioService.folioSeleccionado = {};
    this.folioService.package.emit({});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
