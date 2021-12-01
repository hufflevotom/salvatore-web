import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EvidenciaService } from '../../services/evidencia.service';
import { Evidencia } from 'src/app/models/Evidencia';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evidencias',
  templateUrl: './evidencias.component.html',
  styleUrls: ['./evidencias.component.css']
})
export class EvidenciasComponent implements OnInit, AfterViewInit {
  title: string = 'Evidencias'
  evidencia = this.evidenciaService.evidenciaSeleccionado;
  //TODO: Nombre de columnas
  displayedColumns: string[] = ['numeroFolio', 'idDetalleCliente.dni', 'idDetalleCliente.telefono', 'idDetalleCliente.direccion', 'idDetalleEntrega.fechaEntrega', 'idDetallePedido.descripcionPedido'];
  dataSource: MatTableDataSource<Evidencia>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Evidencia>();
  public loader: boolean = false;
  public flag: boolean = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(public evidenciaService: EvidenciaService) {
    this.dataSource = new MatTableDataSource<Evidencia>(this.evidenciaService.evidencias);
  }

  ngOnInit(): void {
    this.loader = true;
    this.obtenerEvidencias();
  }

  ngAfterViewInit(): void {
    this.loader = true;
    this.obtenerEvidencias();
  }

  obtenerEvidencias() {
    this.evidenciaService.obtenerEvidencias().subscribe(
      res => {
        this.evidenciaService.evidencias = res;
        this.dataSource = new MatTableDataSource<Evidencia>(this.evidenciaService.evidencias.docs);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loader = false;
        this.flag = true;
      },
      err => console.log(err)
    )
  }

  editarEvidencia(evidencia: Evidencia) {
    this.evidenciaService.evidenciaSeleccionado = evidencia;
    this.evidenciaService.package.emit(evidencia);
  }

  nuevoEvidencia() {
    this.evidenciaService.evidenciaSeleccionado = {
      _id: '',
      createdAt: '',
      updatedAt: ''
    };
    this.evidenciaService.package.emit({});
  }

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == "Lib") {
      filterValue = "60beee42030b61001519db52";
    } else if (filterValue == "Libre") {
      filterValue = "60beee42030b61001519db52";
    } else if (filterValue == "En ") {
      filterValue = "60beee1f030b61001519db51";
    } else if (filterValue == "En uso") {
      filterValue = "60beee1f030b61001519db51";
    } else if (filterValue == "Mante") {
      filterValue = "60beee4c030b61001519db53";
    } else if (filterValue == "Mantenimiento") {
      filterValue = "60beee4c030b61001519db53";
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  buscar(form: NgForm){
    console.log(form);
  }

}
