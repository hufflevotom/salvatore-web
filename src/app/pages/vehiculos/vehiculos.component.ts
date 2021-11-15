import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from 'src/app/models/Vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit, AfterViewInit {
  title: string = 'Vehículos';
  vehiculo = this.vehiculoService.vehiculoSeleccionado;
  displayedColumns: string[] = ['placa', 'marca', 'color', 'vencimientoSoat', 'vencimientoRevision', 'idEstadoVehiculo'];
  dataSource: MatTableDataSource<Vehiculo>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Vehiculo>();
  public loader: boolean = false;
  public flag: boolean = false;

  constructor(public vehiculoService: VehiculoService) {
    this.dataSource = new MatTableDataSource<Vehiculo>(this.vehiculoService.vehiculos);
  }

  ngOnInit(): void {
    this.loader = true;
    this.obtenerVehiculos();
  }

  ngAfterViewInit(): void {
    this.loader = true;
    this.obtenerVehiculos();

  }

  obtenerVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe(
      res => {
        this.vehiculoService.vehiculos = res;
        this.dataSource = new MatTableDataSource<Vehiculo>(this.vehiculoService.vehiculos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loader = false;
        this.flag = true;
      },
      err => console.log(err)
    )
  }

  editarVehiculo(vehiculo: Vehiculo) {
    this.vehiculoService.vehiculoSeleccionado = vehiculo;
    this.vehiculoService.vehicle.emit(vehiculo);
  }

  nuevoVehiculo() {
    this.vehiculoService.vehiculoSeleccionado = {};
    this.vehiculoService.vehicle.emit({});
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

}
