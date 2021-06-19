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
  displayedColumns: string[] = ['placa','marca','color','vencimientoSoat','vencimientoRevision','idEstadoVehiculo'];
  dataSource: MatTableDataSource<Vehiculo>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows = new Set<Vehiculo>();
  constructor(public vehiculoService: VehiculoService) {
    this.dataSource = new MatTableDataSource<Vehiculo>(this.vehiculoService.vehiculos);
  }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  ngAfterViewInit(): void {
    this.obtenerVehiculos();

  }

  obtenerVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe(
      res => {
        this.vehiculoService.vehiculos = res;
        this.dataSource = new MatTableDataSource<Vehiculo>(this.vehiculoService.vehiculos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
